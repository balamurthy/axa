
import { test as base, Page } from '@playwright/test';

type AuthFixtures = {
    loggedInPage: Page;
};

export const test = base.extend<AuthFixtures>({
    loggedInPage: async ({ page }, use) => {

        // page is already authenticated because
        // storageState is configured in playwright.config.ts

        await page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
        );

        await page.getByRole('heading', { name: 'Dashboard' })
            .waitFor({ state: 'visible' });

        await use(page);
    },
});

export { expect } from '@playwright/test';
