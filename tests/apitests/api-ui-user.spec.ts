import { test, expect } from '@playwright/test';

test('Create insurance customer through API and verify login through UI', async ({
  request,
  page
}) => {
  const timestamp = Date.now();

  const customer = {
    firstName: 'Bala',
    lastName: 'Murthy',
    email: `bala.${timestamp}@example.com`,
    password: 'Password@123',
    phone: '+1 416 555 0189'
  };

  // STEP 1: Create customer through API
  const createResponse = await request.post('/api/customers', {
    data: customer
  });

  expect(createResponse.status()).toBe(201);

  const createdCustomer = await createResponse.json();

  expect(createdCustomer.firstName).toBe(customer.firstName);
  expect(createdCustomer.email).toBe(customer.email);
  expect(createdCustomer).toHaveProperty('id');
  expect(createdCustomer).toHaveProperty('policyNumber');

  // STEP 2: Verify the API-created customer exists
  const customerResponse = await request.get(
    `/api/customers/${createdCustomer.id}`
  );

  expect(customerResponse.ok()).toBeTruthy();

  const apiCustomer = await customerResponse.json();

  expect(apiCustomer.email).toBe(customer.email);
  expect(apiCustomer.firstName).toBe(customer.firstName);

  // STEP 3: Open insurance UI
  await page.goto('/');

  // STEP 4: Login using EXACTLY the same API-created credentials
  await page.getByLabel('Email').fill(customer.email);
  await page.getByLabel('Password').fill(customer.password);
  await page.getByRole('button', { name: 'Login' }).click();

  // STEP 5: Verify successful login
  await expect(page.getByRole('heading', {
    name: 'Customer Dashboard'
  })).toBeVisible();

  await expect(page.getByText(customer.firstName, { exact: true })).toBeVisible();
  await expect(page.getByText(customer.lastName, { exact: true })).toBeVisible();
  await expect(page.getByText(customer.email, { exact: true })).toBeVisible();

  // STEP 6: Verify policy data returned from API is shown in UI
  await expect(
    page.getByText(createdCustomer.policyNumber, { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('Auto Insurance', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('Active', { exact: true })
  ).toBeVisible();
});

test('Invalid login should be rejected', async ({ request, page }) => {
  const timestamp = Date.now();

  const customer = {
    firstName: 'Test',
    lastName: 'Customer',
    email: `invalid.${timestamp}@example.com`,
    password: 'Password@123'
  };

  await request.post('/api/customers', {
    data: customer
  });

  await page.goto('/');

  await page.getByLabel('Email').fill(customer.email);
  await page.getByLabel('Password').fill('WrongPassword@123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Invalid email or password')).toBeVisible();
});