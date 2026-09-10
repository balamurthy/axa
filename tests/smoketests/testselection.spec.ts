import {test,expect} from '@playwright/test';

test('@regression Title check ', async ({ page }) => {

    console.log("Title check done");
});

test('Checking position @ui of Username box', async ({ page }) => {

console.log("checking position of username textbox done");
});

test('Checking if password is not showing the typed text  @security ', async ({ page }) => {

console.log("checking password box is masked done");

});


