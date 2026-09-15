
import { test as setup } from '@playwright/test';

import { LoginPage } from './Pages/loginpage';


interface LoginData {
    username: string;
    password: string;
}

const loginData: LoginData = {
    username: 'Admin',
    password: 'admin123'
};

let lp : LoginPage;


setup('authenticate', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   lp=new LoginPage(page);
   await lp.login(loginData);

    // Save authentication state
    await page.context().storageState({
        path: '../user.json'
    });
});
