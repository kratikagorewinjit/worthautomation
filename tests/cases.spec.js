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
await page.waitForTimeout(3000);
await page.locator("//a[normalize-space()='All cases']").click();
}


//Need to change the logic for this ---this i already done in view standalone case
// //Test Case 1 --Update case details
// test ('Test Case 1',async ({page, browser}) => {
// await commonSteps (page);
// await page.locator("//tbody/tr[1]/td[7]/a[1]").click();
// await page.waitForTimeout(3000);
// const newTab = allPages[1];
// await newTab.bringToFront();
// // Now you can interact with the content of the new tab
// await newTab.waitForLoadState('domcontentloaded');
// await page.getByRole('button', { name: 'Edit' }).click();
// await page.fill('#lastName', 'gggg');
// await page.getByRole('button', { name: 'Save' }).click();
// //await page.pause();
// });

//Test case 2 --Search cases by customer,business name
test ('Test Case 2', async ({page}) => {
await commonSteps (page);
await page.locator("//a[normalize-space()='All cases']").click();
await page.locator("//input[@id='search-field-unique']").click();
await page.locator("//input[@id='search-field-unique']").fill('kratika');
//await page.pause();
});

//Test Case 3 --search record by filter
test ('Test Case 3', async ({page}) => {
await commonSteps (page);
await page.locator("//a[normalize-space()='All cases']").click();
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Onboarding').check();
await page.getByRole('button', { name: 'Apply' }).click();
//await page.pause();
});

//Test Case 4 --Reset applied filter
test ('Test Case 4', async ({page}) => {
await commonSteps (page);
await page.locator("//a[normalize-space()='All cases']").click();
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Onboarding').check();
await page.getByRole('button', { name: 'Apply' }).click();
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByRole('button', { name: 'Reset' }).click();
await page.getByRole('button', { name: 'Apply' }).click();
//await page.pause();
});

//Test Case 5 --Navigate to different pages
test ('Test Case 5', async ({page}) => {
await commonSteps (page);
await page.locator("//a[normalize-space()='All cases']").click();
await page.getByLabel('Pagination').locator('a').filter({ hasText: '3' }).click();
//await page.pause();
});