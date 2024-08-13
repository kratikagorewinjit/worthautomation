const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

// Define a function with common steps
async function commonSteps(page) {
await page.goto('https://admin.dev.joinworth.com/');
await page.fill('#email', 'kratika.gore@joinworth.com');
await page.fill('#password', 'Winjit@1234');
// Click the login button
await page.click('//*[@id="root"]/div[1]/div/div[2]/div/form/div[3]/button/div');
await page.waitForTimeout(3000);
await page.getByRole('link', { name: 'Standalone cases' }).click();
}

// Test case 1 --View standalone case detail
test ('Test Case 1', async ({browser}) => {
    const context =await browser.newContext()
    const page =await context.newPage();
//call the common steps functions
await commonSteps(page);
await page.waitForTimeout(3000);
const [newPage] = await Promise.all
    (

        [
                
           page.locator("//tbody/tr[1]/td[7]/a[1]").click(),
           
         ]
    )
//await page.pause();
});


//Test Case 2 --Search cases by ticket number,business name & applicant name
test ('Test Case 2', async ({page}) => {
//call the common steps functions
await commonSteps (page);
await page.waitForTimeout(3000);
await page.locator("//input[@id='search-field-unique']").click();
await page.locator("//input[@id='search-field-unique']").fill("kratika");
//await page.pause();
});

//Test Case 3 --search record by filter
test ('Test Case 3', async ({page}) => {
//Call the common steps functions
await commonSteps (page);
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Onboarding', { exact: true }).check();
await page.getByRole('button', { name: 'Apply' }).click();
//await page.pause();
});

//Test Case 4 --Reset applied filter
test ('Test Case 4', async ({page}) => {
await commonSteps (page);
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Onboarding', { exact: true }).check();
await page.getByRole('button', { name: 'Apply' }).click();
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByRole('button', { name: 'Reset' }).click();
await page.getByRole('button', { name: 'Apply' }).click();
//await page.pause();
});

//Test Case 5 --Navigate to different pages
test ('Test Case 5', async ({page}) => {
await commonSteps(page);
await page.locator("//span[normalize-space()='3']").click();
//await page.pause();
});