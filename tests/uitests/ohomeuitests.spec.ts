import {test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';


test('Check position of username textbox @ui', async ({ page }) => {
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const lp = new LoginPage(page);
    const box = await lp.usernameposition();

    console.log('username current position:', box);
  

    expect(box.x).toBeCloseTo(300,0);
    expect(box.y).toBeCloseTo(355,0);
});

test('Check if logo is visible in the page', async ({ page }) => {
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

     const lp = new LoginPage(page);
     const isLogoVisible = await lp.doesbrandingimageexist();
     expect(isLogoVisible).toBe(true);
});
