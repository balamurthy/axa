import { test, expect } from '@playwright/test';
import { loginToOrangeHRM } from '../../utils/loginmodule';

interface LoginData {
    username: string;
    password: string;
}

const loginData: LoginData = {
    username: 'Admin',
    password: 'admin123'
};

test('Login Test', async ({ page }) => {
    await loginToOrangeHRM(page, loginData.username, loginData.password);

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});
