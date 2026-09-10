//Customer Registration for insurance sandbox.

import { test, expect } from '@playwright/test';
import { fillregform } from '../../utils/fillregform';


test.beforeEach(async ({ page }) => { 
    await page.goto('file:///E:/BLaptop/Kvaluent/insurance_sandbox.html');
});


test('test registration @success @smoke', async ({ page }) => {
  
  await fillregform(page, 'Bala', 'Murthy', '1980-01-01', 'b@c.com', 1234567890, '7932madfwd');
  await expect (page.getByText('Customer registered')).toBeVisible();

});

test.describe('test registration @negative', () => {
test('test registration blank fields failure expected @ui', async ({ page }) => {
  await fillregform(page, 'Bala', 'Murthy', '', 'b@c.com', 1234567890, '7932madfwd');
  await expect(page.getByText('All mandatory fields are')).toBeVisible();

});
test('test registration text field should not contain sql injection @security', async ({ page }) => {
  await fillregform(page, "select * from users where username='admin' or 1=1", 'Murthy', '1980-01-01', 'b@c.com', 1234567890, '7932madfwd');
  await expect(page.getByText('Customer registered').first()).not.toBeVisible();

});

});