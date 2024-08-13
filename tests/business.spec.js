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
await page.getByRole('link', { name: 'Businesses' }).click();
await page.waitForTimeout(3000);
}

//Test Case1 --Send invitation from business module
test ('Test Case 1', async({page}) => {
//call the common step function
await commonSteps (page);
//await page.getByRole('link', { name: 'Businesses' }).click();
await page.getByRole('button', { name: 'Send invitation' }).click();
await page.locator('.react-select__input-container').click();
await page.locator('#react-select-2-option-0').click();
await page.getByRole('button', { name: 'Send invitation' }).click();
//await page.pause();
});

//Test Case 2 --Apply & Reset filter
test ('Test Case 2', async({page}) => {
//call the common function
await commonSteps (page);
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Verified', { exact: true }).check();
await page.getByRole('button', { name: 'Apply' }).click();
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByRole('button', { name: 'Reset' }).click();
await page.getByRole('button', { name: 'Apply' }).click();
//await page.pause();
});

//Test Case 3 --Search functionality
test ('Test Case 3', async ({page}) => {
//call the common function
await commonSteps (page);
await page.fill ('#search-field-unique', 'TCS');
//await page.pause();
});

//Test Case 4 --Catch the error message with invalid email
test ('Test Case 5', async ({page}) => {
//call the common function
await commonSteps (page);
await page.getByRole('button', { name: 'Send invitation' }).click();
await page.locator('.react-select__input-container').click();
await page.locator('#react-select-2-option-0').click();
await page.waitForTimeout(3000);
//await page.locator('#email').clear();
await page.fill ('#email', 'kratika.gore@joinworth.');
await page.getByRole('button', { name: 'Send invitation' }).click();
const errorMessage =await page.locator("//p[@id='email-error']").textContent()
// Wait for the error message element to appear
  
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("Enter valid email")).toBeTruthy()
//await page.pause();
});

//Test Case 5 --Catch the error message if proceeding with blank value
test ('Test case 5',async ({page}) => {
//call the common function
await commonSteps (page);
await page.getByRole('button', { name: 'Send invitation' }).click();
await page.getByRole('button', { name: 'Send invitation' }).click();
const url =await page.url();
if (url =='https://customer.dev.joinworth.com/businesses/send-invitation') {
    console.log ('pass');
}
else {
    console.log ('fail');
}
//await page.pause();
});