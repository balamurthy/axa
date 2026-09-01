//Go to https://google.com and check if the input box is present in the page
import { test, expect } from '@playwright/test';

test('Check if the input box is present in the page', async ({ page }) => {
    await page.goto('https://google.com');
 //identify the text box by the title called "Search"
    const inputBox = page.getByRole('combobox', { name: 'Search' })


    await expect(inputBox).toBeVisible();
});

//check if google image is present
test('Check if google image is present', async ({ page }) => {
    await page.goto('https://google.com');
    
    //locate the image by xpath //*[@aria-label="Google"]

    const googleImage = page.locator('xpath=//*[@aria-label="Google"]');

    await expect(googleImage).toBeVisible();
}
);