import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   const un = "Admin";
   const pw = "admin123";
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(un);
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill(pw);
  await page.getByRole('button', { name: 'Login' }).click();
  
  try {
    //check if Dashboard heading is present
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
  //Click on the user profile icon oxd-icon bi-caret-down-fill oxd-userdropdown-icon to open the dropdown menu
  //await page.locator("//*[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    await page.locator("//*[contains(@class,'userdropdown-icon')]").click();

  //check if logout link is present
    await expect(page.getByRole('menuitem', { name: 'Logout' })).toBeVisible();
    await (page.getByRole('menuitem', { name: 'Logout' })).click();
     console.log(`Login Successful for user ${un} pw ${pw}`);
    } catch (error) {

        console.log(`Login failed for user \`${un}\` pw \`${pw}\`:`);
        //Invalid credentials
        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
    }

  //xpath for left sidepanel Dashboard
  

  

});