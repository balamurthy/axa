import {test,expect} from '@playwright/test';


test('Check position of Register customer button @ui', async ({ page }) => {
  await page.goto('file:///E:/BLaptop/Kvaluent/insurance_sandbox.html');
    const button = page.getByRole('button', { name: 'Register Customer' });

    const box = await button.boundingBox();

    console.log('Button current position:', box);

    //expect(box).not.toBeNull();
    if (box) {
        expect(box.x).toBeCloseTo(137,0);
        expect(box.y).toBeCloseTo(479,0);

    }
        
});

test ('Check the style @ui of the Register customer button ', async ({ page }) => {

await page.goto('file:///E:/BLaptop/Kvaluent/insurance_sandbox.html');
const button = page.getByRole('button', { name: 'Register Customer' });

if (await button.getAttribute("class") === "primary") {
    expect(true).toBeTruthy();
} else {
    expect(false).toBeTruthy();
}

});

test ('Check if the label for Full Name input box @ui is Full Name *', async ({ page }) => {

    await page.goto('file:///E:/BLaptop/Kvaluent/insurance_sandbox.html');

    const label = page.locator('//input[@id="firstName"]//preceding-sibling::label');

    const actualLabel = await label.textContent();
    expect(actualLabel).toBe('Full Name *');

});

//Check the background colour of the button to be #163a5f

test('Check background colour of the Register customer @ui button to be dark blue ', async ({ page }) => {

    await page.goto('file:///E:/BLaptop/Kvaluent/insurance_sandbox.html');

    const button = page.getByRole('button', { name: 'Register Customer' });

    const backgroundColor = await button.evaluate((el) => getComputedStyle(el).backgroundColor);

    expect(backgroundColor).toBe('rgb(22, 58, 95)'); // #163a5f in RGB

});
