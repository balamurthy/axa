import { Page,Locator } from '@playwright/test';

export class LoginPage {

    username: Locator;
    password: Locator;
    loginButton: Locator;
    brandingimage : Locator;

    constructor(private page: Page) {
        this.username = this.page.getByRole('textbox', { name: 'Username' });
        this.password = this.page.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.brandingimage = this.page.locator('//img[contains(@src,"branding")]');
    
    }

  // Method to perform login action     

    async login(
        username: string,
        password: string
    ) :Promise <boolean> {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        
        if (await this.page.locator('h6:has-text("Dashboard")').isVisible()) {
            return Promise.resolve(true);
        }
        else
        {
           return Promise.resolve(false);
        }    
    }

// Method to check if username textbox is present    

    async isUsernameVisible(username: string) :Promise <boolean> {
        await this.username.click();
        if (await this.username.isVisible()) {
            return Promise.resolve(true);
        }
        else
        {
           return Promise.resolve(false);
        }
    }


    //check position of user name box 

    async usernameposition() :Promise <any> {
   
    
    const box = await this.username.boundingBox();

    console.log('Button current position:', box);

    return box;


    }

//check if branding image or logo exists in the login page
    async doesbrandingimageexist() :Promise <boolean> {

        await this.brandingimage.waitFor({ state: 'visible', timeout: 5000 });
        if (await this.brandingimage.isVisible()) {
            return Promise.resolve(true);
        }
        else
        {
           return Promise.resolve(false);
        }   
    }

}