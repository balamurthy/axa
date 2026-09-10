import { test } from '@playwright/test';
import { brokenlinkchecker } from '../../utils/common';

test('Broken Links Test', async ({ page }) => {
    const url = 'file:///E:/BLaptop/Kvaluent/pagewithbrokenlinks.html';

    await page.goto(url, { waitUntil: 'load' });
    await brokenlinkchecker(url, page);

});

    

