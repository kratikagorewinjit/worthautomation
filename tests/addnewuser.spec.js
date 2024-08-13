const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

// Define a function with common steps
async function commonSteps(page) {
//const page1 = await chromium.launch().then(browser => browser.newPage());
await page.goto('https://admin.dev.joinworth.com/');
await page.fill('#email', 'kratika.gore@joinworth.com');
await page.fill('#password', 'Winjit@1234');
// Click the login button
await page.click('//*[@id="root"]/div[1]/div/div[2]/div/form/div[3]/button/div');
await page.waitForTimeout(3000);
await page.getByRole('link', { name: 'Users' }).click();
};
// Test case 1 --Add new user
test ('Test Case 1',async ({page}) => {
commonSteps(page);
await page.getByRole('button', { name: 'Add new user' }).click();
await page.fill('#firstName', 'Kratika');
await page.fill('#lastName','Goree');
await page.fill('#email', 'kratika.gore+909@joinworth.com');
await page.getByRole('button', { name: 'Create' }).click();
await page.pause();
});

//Test Case 2 --Add new user with existing email id
test ('Test Case 2',async ({page}) => {
commonSteps(page);
await page.getByRole('button', { name: 'Add new user' }).click();
await page.fill('#firstName', 'Kratika');
await page.fill('#lastName','Goree');
await page.fill('#email', 'kratika.gore+900@joinworth.com');
await page.getByRole('button', { name: 'Create' }).click();
await page.pause();
});

////Test Case 3 --Catch the error message with invalid email strings
test ('Test Case 3', async ({page}) => {
//call the common steps function
await commonSteps (page);
await page.getByRole('button', { name: 'Add new user' }).click();
await page.fill('#firstName', 'Kratika');
await page.fill('#lastName','Goree');
await page.fill('#email', 'kratika.gore+900@joinworth.');
await page.getByRole('button', { name: 'Create' }).click();
await page.waitForTimeout(3000);
const errorMessage =await page.locator("//div[@class='mt-2']//p[@id='email-error']").textContent()
// Wait for the error message element to appear
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("valid email")).toBeTruthy()
await page.pause();
});

//Test Case 4 --Add new user with invalid mobile number
test ('Test Case 4', async ({page}) => {
commonSteps (page);
await page.getByRole('button', { name: 'Add new user' }).click();
await page.fill('#firstName', 'Kratika');
await page.fill('#lastName','Goree');
await page.fill('#email', 'kratika.gore+907@joinworth.com');
await page.getByPlaceholder('Enter phone number').fill('9786764');
await page.getByRole('button', { name: 'Create' }).click();
await page.waitForTimeout(3000);
const errorMessage =await page.locator("//div[@class='relative']//p[@id='email-error']").textContent()
// Wait for the error message element to appear
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("valid mobile")).toBeTruthy()
await page.pause();
});

//Test Case 5 --Update user detail
test ('Test Case 5', async ({page}) => {
commonSteps (page);
await page.waitForTimeout(3000);
await page.locator("//tbody/tr[1]/td[5]/a[1]").click();
await page.getByRole('button', { name: 'Edit' }).click();
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('Kratikaaa');
await page.getByRole('button', { name: 'Save' }).click();
await page.pause();
});

//Test Case 6 --Search user by customer,business name
test ('Test Case 6', async ({page}) => {
commonSteps (page);
await page.locator("//input[@id='search-field-unique']").click();
await page.locator("//input[@id='search-field-unique']").fill('kratika goree');
await page.pause();
});

//Test Case 7 --search record by filter
test ('Test Case 7',async ({page}) => {
commonSteps (page);
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Active', { exact: true }).check();
await page.getByRole('button', { name: 'Apply' }).click();
await page.pause();
});

//Test Case 8 --Reset applied filter
test ('Test Case 8', async ({page}) => {
commonSteps (page);
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Active', { exact: true }).uncheck();
await page.getByRole('button', { name: 'Apply' }).click();
await page.pause();
});

//Test Case 9 --Resend invite feature
test ('Test Case 9', async ({page}) => {
commonSteps (page);
await page.waitForTimeout(3000);
await page.locator("//tbody/tr[1]/td[5]/a[1]").click();
await page.getByRole('button', { name: 'Resend invite' }).click();
 // Capture a screenshot (optional) that mail sent successfully or not
 await page.screenshot({ path: 'login-screenshot.png' });
 await page.pause();
});

//Test case 7 --Copy link and paste to new tab
//test ('Test Case 8', async ({page}) => {
//commonSteps (page);
//await page.getByRole('button', {name: 'Copy link'});
//Open a new tab
//const newPage = await browser.newPage();
//await page.waitForTimeout(3000);
//await newPage.keyboard.press('Control+V');
//await page.pause();
// });

//Test Case 10 --Navigate to different pages
test ('Test Case 10', async({page}) => {
commonSteps (page);
await page.getByLabel('Pagination').locator('a').filter({ hasText: 'Next' }).click();
await page.pause();
});