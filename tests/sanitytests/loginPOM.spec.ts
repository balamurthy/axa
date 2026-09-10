import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';


interface LoginData {
    username: string;
    password: string;
}

const loginData: LoginData = {
    username: 'Admin',
    password: 'admin123'
};

test('Login Test', async ({ page }) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const lp = new LoginPage(page);
    let result : boolean = await lp.login(loginData.username, loginData.password);

    expect(result).toBe(true);

});

test('Username Visibility  Test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const lp = new LoginPage(page);
    let result : boolean = await lp.isUsernameVisible(loginData.username);

    expect(result).toBe(true);

});