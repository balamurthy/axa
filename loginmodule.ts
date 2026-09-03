import {  Page } from '@playwright/test';

export async function loginToOrangeHRM(page: Page, username: string, password: string) : Promise<boolean> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    let result : boolean =false;
    try {
            await page.locator("//*[contains(@class,'userdropdown-icon')]").click();
            await page.getByRole('menuitem', { name: 'Logout' }).click();
            result = true;
        } catch (error) {
            
            //create a new context for the error page
            
            //take a screenshot
            //path - username_password<ddmmyyyy hhmmss>.png
            
            const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
            const screenshotPath = `login_error_${username}_${password}_${timestamp}.png`;
            await page.screenshot({ path: screenshotPath });
            console.log("Login failed for user:", username, "with password:", password);
            result =false;
        }
        finally {
            console.log("Login module completed for user:", username, "with password:", password);
            
        }
        return (result);

}
