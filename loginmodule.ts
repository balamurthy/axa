import {  Page } from '@playwright/test';

export async function loginToOrangeHRM(page: Page, username: string, password: string) : Promise<boolean> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
      try {
            await page.locator("//*[contains(@class,'userdropdown-icon')]").click();
            await page.getByRole('menuitem', { name: 'Logout' }).click();
            return true;
        } catch (error) {
            
            return false;
        }

}
