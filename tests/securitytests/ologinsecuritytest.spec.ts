import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';

interface LoginData {
    username: string;
    password: string;
}

const loginData: LoginData = {
    username: 'select * from users',
    password: 'admin'
};

test('SQL Injection Test', async ({ page }) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const lp = new LoginPage(page);
    let result : boolean = await lp.login(loginData.username, loginData.password);

    expect(result).toBe(false);

});
