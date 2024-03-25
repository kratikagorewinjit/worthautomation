const { test, expect } = require('@playwright/test');
const { url } = require('inspector');
const { chromium } = require('playwright');

// Define a function with common steps
async function commonSteps(page) {
//const page1 = await chromium.launch().then(browser => browser.newPage());
await page.goto('https://customer.dev.joinworth.com/login');
// Click the login button
await page.fill ('#email', 'kratika.gore+2@joinworth.com');
await page.fill ('#password' , 'Winjit@1234');
await page.getByRole('button', { name: 'LOGIN' }).click();
await page.getByRole('link', { name: 'Users' }).click();
await page.waitForTimeout(3000);
}

//Test Case 1 --Add new user
test ('Test Case 1', async ({page}) => {
await commonSteps(page);
await page.getByRole('button', { name: 'Add new user' }).click();
await page.fill('#firstName', 'kratika');
await page.fill('#lastName','gore');
await page.fill('#email', 'kratika.gore+1216@joinworth.com');
await page.getByLabel('Select Role*').click();
await page.getByText('CRO').click();
await page.waitForTimeout(3000);
await page.getByRole('button', { name: 'Create' }).click();
});

//Test Case 2 --Update user detail
test ('Test Case 2', async ({page}) => {
await commonSteps (page);
await page.locator("//tbody/tr[1]/td[6]/a[1]").click();
await page.getByRole('button', { name: 'Edit' }).click();
await page.fill('#firstName', 'kratikaaa');
await page.getByRole('button', { name: 'Save' }).click();
//await page.pause();
});

// //Test Case 3 --Resend invite
test ('Test Case 3', async ({page}) => {
await commonSteps (page);
await page.locator("//tbody/tr[1]/td[6]/a[1]").click();
await page.getByRole('button', { name: 'Resend Invite' }).click();
//await page.pause();
});

// //Test Case 4 --Copy link
test ('Test Case 4', async ({page}) => {
await commonSteps (page);
await page.locator("//tbody/tr[1]/td[6]/a[1]").click();
await page.getByRole('button', { name: 'Copy Link' }).click();
//await page.pause();
});

//Test Case 5 --Search functionality
test ('Test Case 5', async ({page}) => {
await commonSteps (page);
await page.locator("//input[@id='search-field-unique']").click();
await page.locator("//input[@id='search-field-unique']").fill('kratika');
//await page.pause();
});

//Test Case 6 --Apply & Reset filter
test ('Test Case 6', async ({page}) => {
await commonSteps (page);
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Inactive').check();
await page.getByRole('button', { name: 'Apply' }).click();
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByRole('button', { name: 'Reset' }).click();
await page.getByRole('button', { name: 'Apply' }).click();
//await page.pause();
});

//Test Case 7 --Catch the error message with invalid email
test ('Test Case 7',async ({page}) => {
await commonSteps (page);
await page.getByRole('button', { name: 'Add new user' }).click();
await page.fill('#firstName', 'kratika');
await page.fill('#lastName','gore');
await page.fill('#email', 'kratika.gore@joinworth.');
await page.getByLabel('Select Role*').click();
await page.getByText('CRO').click();
await page.waitForTimeout(3000);
await page.getByRole('button', { name: 'Create' }).click();
const errorMessage =await page.locator("//p[@id='email-error']").textContent()
// Wait for the error message element to appear
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("Enter valid email")).toBeTruthy()
//await page.pause();
});