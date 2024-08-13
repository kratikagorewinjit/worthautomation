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
await page.getByRole('link', { name: 'Businesses' }).click();
}

// Test case 1 --View Business detail
test ('Test Case 1', async ({page}) => {
//call the common steps function
await commonSteps(page);
await page.locator("//tbody/tr[6]/td[4]/a[1]").click();
await page.locator('div').filter({ hasText: /^Business account overview$/ }).getByRole('img').click();
});

//Test Case 2 --On business detail page check the worth score by mouse hover
test ('Test Case 2', async ({page}) => {
//call the common steps function
await commonSteps(page);
await page.locator("//tbody/tr[1]/td[4]/a[1]").click();
await page.locator("//div[contains(@class,'underline cursor-pointer underline-offset-4 overflow-hidden break-words')]//span[contains(@class,'font-semibold')]").hover()
});

// //Test Case 3 --On business detail page click on records there on associated customer
test ('Test Case 3', async ({page}) => {
//call the common steps function
await commonSteps(page);
await page.locator("//tbody/tr[6]/td[4]/a[1]").click();
await page.waitForTimeout(3000);
await page.locator("//a[normalize-space()='Red Bull']").click();
const url =await page.url();
if (url =="https://admin.dev.joinworth.com/customers/b1fad22e-5533-4496-89ba-a4fe2cb0cf88?page=1&itemsPerPage=10&filter=data_cases.status%255B0%255D%3D4") 
{
console.log("Pass")
}
else {
    console.log("Fail")
}
await page.pause();
});

//Test Case 4 --Search Business by business name
test('Test Case 4', async ({ page }) => {
// Call the common steps function
await commonSteps(page);
// Fill the input field with "Quest"
await page.locator("//input[@id='search-field-unique']").fill("Quest");
// Wait for the page to load or for some specific condition
await page.waitForLoadState('networkidle');
// Check if the input field contains the text "Quest"
const inputValue = await page.$eval("#search-field-unique", input => input.value);
if (inputValue.includes("QUEST")) {
// Check if the element with class '2xl:hidden' is visible
const isElementVisible = await page.isVisible("//span[@class='2xl:hidden']");
if (isElementVisible) {
        console.log("Pass");
    } else {
        console.log("Element not visible");
        console.log("Fail");
    }
} 
await page.pause(2000);
});

//Test Case 5 --search record by filter
test ('Test Case 5', async ({page}) => {
//Call the common steps functions
await commonSteps (page);
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Subscribed', { exact: true }).check();
await page.getByRole('button', { name: 'Apply' }).click();
//await page.pause();
});
    
//Test Case 6 --Reset applied filter
test ('Test Case 6', async ({page}) => {
await commonSteps (page);
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByLabel('Subscribed', { exact: true }).check();
await page.getByRole('button', { name: 'Apply' }).click();
await page.getByRole('button', { name: 'Filter' }).click();
await page.getByRole('button', { name: 'Reset' }).click();
await page.getByRole('button', { name: 'Apply' }).click();
//await page.pause();
});

//Test Case 7 --Navigate to different pages
test ('Test Case 7', async ({page}) => {
await commonSteps (page);
await page.locator('a').filter({ hasText: '3' }).click();
});
