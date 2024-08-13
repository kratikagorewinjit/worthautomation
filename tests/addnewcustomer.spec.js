const { test, expect } = require('@playwright/test');
const { promises } = require('dns');
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
//await page.getByRole('button', { name: 'Dismiss' }).click();
}

// Test case 1 --Add new customer
test('Test Case 1', async ({ page }) => {
// call the common steps function
await commonSteps(page);
await page.waitForTimeout(3000);
await page.getByRole('button', { name: 'Add new customer' }).click();
await page.fill('#firstName', 'kratika gore');
await page.fill('#lastName', 'goree');
await page.fill('#email', 'kratika.gore+1219@joinworth.com');
await page.fill('#companyName', 'winjit pune');
await page.locator("//div[normalize-space()='Create']").click();
await page.pause();
});

// Test case 2 --Add new customer with existing email id
test('Test Case 2', async ({ page }) => {
// call the common steps function
await commonSteps(page);
await page.getByRole('button', { name: 'Add new customer' }).click();
await page.fill('#firstName', 'kratika gore');
await page.fill('#lastName', 'goree');
await page.fill('#email', 'kratika.gore+44@joinworth.com');
await page.fill('#companyName', 'winjit pune');
await page.locator("//div[normalize-space()='Create']").click();
await page.pause();
});

//Test Case 3 --Catch the error message with invalid email strings
test ('Test Case 3', async ({page}) => {
//call the common steps function
await commonSteps (page);
await page.getByRole('button', { name: 'Add new customer' }).click();
await page.fill('#firstName', 'kratika gore');
await page.fill('#lastName', 'goree');
await page.fill('#email', 'kratika.gore+44@joinworth.');
await page.fill('#companyName', 'winjit pune');
await page.locator("//div[normalize-space()='Create']").click();
await page.waitForTimeout(3000);
const errorMessage =await page.locator("//p[@id='email-error']").textContent()
// Wait for the error message element to appear
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("valid email")).toBeTruthy()
});

//Test case 4 --Update customer detail
test ('Test Case 4', async ({page}) => {
///call the common steps function
await commonSteps (page);
await page.waitForTimeout(3000);
await page.getByRole('row', { name: 'e0495588-8676-466f-9...' }).locator('a').nth(1).click();
await page.getByRole('button', { name: 'Edit' }).click();
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('kratika goreee');
await page.getByRole('button', { name: 'Save' }).click();
await page.pause();
});

//Test case 5 --Search customer by customer,business name
test ('Test Case 5', async ({page}) =>{
await commonSteps (page);
await page.locator("//input[@id='search-field-unique']").click();
await page.locator("//input[@id='search-field-unique']").fill('kratika');
await page.pause();
});

//Test Case 6 --search record by filter
test ('Test Case 6', async ({page}) => {
await commonSteps (page);
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Active', { exact: true }).check();
await page.getByRole('button', { name: 'Apply' }).click();
await page.pause();
});

//Test Case 7 --Reset applied filter
test ('Test Case 7', async ({page}) => {
await commonSteps (page);
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Active', { exact: true }).check();
await page.getByRole('button', { name: 'Apply' }).click();
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByRole('button', { name: 'Reset' }).click();
await page.getByRole('button', { name: 'Apply' }).click();
await page.pause();
});

//Test Case 8 --Resend invite feature
test ('Test Case 8', async ({page}) => {
await commonSteps (page);
await page.getByRole('row', { name: 'f5430cc8-733b-42a5-b...' }).locator('a').nth(1).click();
  await page.getByRole('button', { name: 'Resend Invite' }).click();
//Capture a screenshot (optional) that mail sent successfully or not
await page.screenshot({ path: 'login-screenshot.png' });
await page.pause();
});

//Test Case 9 --Navigate to different pages
test ('Test Case 9', async({page}) => {
await commonSteps (page);
await page.getByLabel('Pagination').locator('a').filter({ hasText: '3' }).click();
await page.pause();
});
 
//Test Case 10 -- Deactivate any customer
test ('Test Case 10', async ({page}) => {
await commonSteps (page);
await page.getByRole('row', { name: '2e202912-3816-4bdc-9...' }).locator('a').nth(1).click();
await page.locator("//span[@class='font-medium text-xs text-red-600']").click();
await page.locator("//div[contains(text(),'Deactivate')]").click();
await page.locator('div').filter({ hasText: /^#2e202912-3816-4bdc-993b-ad1d1121cf68$/ }).getByRole('img').click();
await page.pause();
});

//Test Cae 11 --Activate any customer
test ('Test Case 11',async ({page}) => {
await commonSteps (page);
await page.getByRole('row', { name: '2e202912-3816-4bdc-9...' }).locator('a').nth(1).click();
await page.getByRole('button', { name: 'Activate' }).click();
await page.getByRole('button', { name: 'Activate' }).click();
await page.locator('div').filter({ hasText: /^#2e202912-3816-4bdc-993b-ad1d1121cf68$/ }).locator('path').click();
await page.pause();
});
  
  
  
  


