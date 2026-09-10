import type { Page } from '@playwright/test';

export async function dosearch(page: Page, policynumber:string  ) {

//await page.goto('file:///E:/BLaptop/Kvaluent/insurance_sandbox.html');
  
  await page.getByRole('button', { name: '6. Search' }).click();
    await page.getByRole('textbox', { name: 'Policy Number' }).fill(policynumber);

    await page.locator('//button[@onClick="findPolicy()"]').click();

    
}
