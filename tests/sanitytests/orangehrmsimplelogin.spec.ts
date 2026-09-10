import { test, expect } from '@playwright/test';
import { loginToOrangeHRM } from '../../utils/loginmodule';

test.beforeEach (async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('Valid OrangeHRM credentials', async ({ page }) => {
    const username = 'Admin';
    const password = 'admin123';

    const isLoginSuccess = await loginToOrangeHRM(page, username, password);

    expect(isLoginSuccess).toBeTruthy();
});

test('InValid OrangeHRM username @negative', async ({ page }) => {
    const username = 'xyz';
    const password = 'admin123';

    const isLoginSuccess = await loginToOrangeHRM(page, username, password);

    expect(isLoginSuccess).toBeFalsy();
});