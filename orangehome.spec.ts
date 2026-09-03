import { test, expect } from '@playwright/test';

test('Title check', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Orange/);
});

test('Is the Branding image displayed first', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//    expect(page.locator("//img[contains (@alt, 'branding')]")).toBeVisible();

    //The first image in the page should be the branding image
      const firstimage =await page.locator('img').first().getAttribute('alt');

      expect(firstimage).toContain('branding');



    //await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();


});

test('Is the Password box masked', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//check if password is having type password

    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toHaveAttribute('type', 'password');

      


    //await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();


});


