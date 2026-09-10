import { test, expect } from '@playwright/test';
import { dosearch} from '../../utils/search';


test('Testing invalid policy @negative ', async ({ page }) => {
  await page.goto('file:///E:/BLaptop/Kvaluent/insurance_sandbox.html');

  await dosearch(page, 'POLICY123');

  await expect (page.getByText('No policy found.')).toBeVisible();
});


