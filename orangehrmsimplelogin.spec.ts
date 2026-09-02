import { test, expect } from '@playwright/test';
import { loginToOrangeHRM } from '../utils/loginmodule';

test('test', async ({ page }) => {
    const un = "Admin";
    const pw = "admin123";
    
   const isLoginSuccess= await loginToOrangeHRM(page, un, pw);
    
   console.log ("Login status for user " + un + " and pw " + pw + ":", isLoginSuccess);

   expect (isLoginSuccess).toBe(true);


});