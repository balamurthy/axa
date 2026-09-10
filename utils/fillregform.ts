

import type { Page } from '@playwright/test';

export async function fillregform(page: Page, 
    firstName:string, 
    lastName: string , dob: string, email: string, phone:number, address:string ) {

//await page.goto('file:///E:/BLaptop/Kvaluent/insurance_sandbox.html');
  
  await page.getByRole('button', { name: '1. Customer' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last Name *' }).fill(lastName);
  await page.getByRole('textbox', { name: 'Date of Birth *' }).fill(dob);
  await page.getByRole('textbox', { name: 'Email *' }).fill(email);
  await page.getByRole('textbox', { name: 'Phone *' }).fill(phone.toString());
  await page.getByRole('textbox', { name: 'Address *' }).fill(address);
  await page.getByRole('button', { name: 'Register Customer' }).click();
}
