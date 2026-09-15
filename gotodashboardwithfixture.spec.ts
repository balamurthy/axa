import { test, expect } from '../fixtures/auth.fixture';

test('Dashboard page smoke test @dashboardsmoke', async ({ loggedInPage }) => {

    await expect(
      //using the fixture loggedInPage which is already authenticated and navigated to the dashboard page  
        loggedInPage.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

});
