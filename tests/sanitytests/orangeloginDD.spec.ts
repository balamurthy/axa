import { test, expect, BrowserContext, Browser, chromium } from '@playwright/test';
import { loginToOrangeHRM } from '../../utils/loginmodule';

const loginData = [
    { un: 'Admin', pw: 'admin123', expected: false } // both username and password are correct. expected to login successfully
    //{ un: 'Admin', pw: 'wrongpass', expected: true }, // correct username but wrong password.expected to fail login
  //  { un: 'wronguser', pw: 'admin123', expected: false } // wrong username but correct password. expected to fail login
    // both username and password are wrong (password cant be wrong for wrong user!),
]

    test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

});
for (const user of loginData) {
    test(`OrangeHRM Login - ${user.un} / ${user.pw}`, async ({page}) => {
        const { un, pw, expected } = user;

         const browser: Browser = await chromium.launch({
            headless: false
        });

         const context: BrowserContext = await browser.newContext();
        
        const loginSuccess = await loginToOrangeHRM(page, un, pw);
        
        if (loginSuccess) {
            console.log(`Login successful for user: ${un} with password: ${pw}`);
        } else {
            console.log(`Login failed for user: ${un} with password: ${pw}`);
        }

        expect(loginSuccess).toBe(expected);
      
    });
}

test.afterEach(async ({ browser, page }, testInfo) => {
    console.log('All tests completed.');
    if (page) {
        
            await page.close();
            console.log ('Page closed for this iteration !',testInfo.title);
        }
        
       
    
});
test.afterAll(async ({ browser }) => {
    if (browser) {
        await browser.close();
        console.log('Browser closed at last!');
    }
});
