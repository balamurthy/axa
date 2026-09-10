import {test,expect } from '@playwright/test';


test('test to check @security if card number is masked', async ({ page }) => {

    await page.goto('file:///E:/BLaptop/Kvaluent/insurance_sandbox.html');

    await page.getByRole('button', { name: 'Payment' }).click();

    const cardNumberInput = page.getByRole('textbox', { name: 'Card Number *' });

   
    await expect (cardNumberInput).toHaveAttribute('type', 'password');
});