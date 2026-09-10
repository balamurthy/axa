import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => { 
console.log ("----Running before each test--------------------");
});


test(' Sample test smoke test @smoke', async ({ page }) => {
  
  console.log ("Smoke test sample");

});

test('Sample UI test @ui', async ({ page }) => {
  
    console.log ("UI test sample");
    
});