import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { DashboardPage } from '../Pages/Dashboardpage';


interface LoginData {
    username: string;
    password: string;
}

const loginData: LoginData = {
    username: 'Admin',
    password: 'admin123'
};


let lp: LoginPage;


test.beforeEach(async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  
   
});

//use storageState: './user.json';
test.use({ storageState: '../user.json' });
test('Dashboard page smoke Tests @dashboardsmoke', async ({ page }) => {
    
    //Do not have to perform login here as it is already done in auth.setup.ts and 
    // the storage state is saved in user.json which is used in playwright.config.ts    

    //let result : boolean = await lp.login(loginData);

    
    const dp = new DashboardPage(page);
    
    let result1 : boolean = await dp.isApplyleaveVisible();
    expect(result1).toBe(true);

    let result2 : boolean = await dp.isMyleaveVisible();
    expect(result2).toBe(true);

    let result3 : boolean = await dp.isTimeatworkVisible();
    expect(result3).toBe(true);

});
