import { test, expect } from "@playwright/test";

interface LoginData {
    username: string;
    password: string;
}
const loginData: LoginData = {
    username: "Admin",
    password: "admin123"
};



test("Login Test", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill(loginData.username);
    await page.getByPlaceholder("Password").fill(loginData.password);
    await page.getByRole("button", { name: "Login" }).click();

    //Assertion or validation at the end of the test case

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

});
