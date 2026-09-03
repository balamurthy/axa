import { Page } from '@playwright/test';
import { getTimestamp} from './common';


export async function loginToOrangeHRM(
    page: Page,
    username: string,
    password: string
): Promise<boolean> {

    try {

        await page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );

        await page.getByPlaceholder('Username').fill(username);
        await page.getByPlaceholder('Password').fill(password);

        await page.getByRole('button', { name: 'Login' }).click();

        // Wait for successful login indicator
        await page.locator('.oxd-userdropdown-tab').waitFor({
            state: 'visible',
            timeout: 5000
        });

        console.log(`Login successful for user: ${username}`);

        // Logout
        await page.locator('.oxd-userdropdown-tab').click();
        await page.getByRole('menuitem', { name: 'Logout' }).click();

        return true;

    } catch (error) {

        console.log(`Login failed for user: ${username}`);

        // Take screenshot only if the page is still open
        if (!page.isClosed()) {

            const timestamp = getTimestamp();

            const screenshotPath =
                `login_error_${username}_${password}_${timestamp}.png`;

            try {

                await page.screenshot({
                    path: screenshotPath,
                    fullPage: true
                });

                console.log(
                    `Failure screenshot saved: ${screenshotPath}`
                );

            } catch (screenshotError) {

                console.warn(
                    'Unable to capture login failure screenshot:',
                    screenshotError
                );
            }
        } else {

            console.warn(
                'Unable to capture login failure screenshot because the page is closed.'
            );
        }

        return false;

    } finally {

        console.log(
            `Login module completed for user: ${username}`
        );
    }
}