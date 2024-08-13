const { test, expect } = require('@playwright/test');
const { url } = require('inspector');
const { chromium } = require('playwright');

// Define a function with common steps
async function commonSteps(page) {
await page.goto('https://app.dev.joinworth.com/');
await page.getByRole('link', { name: 'GET MY SCORE' }).click();
page.waitForTimeout(3000);
await page.getByRole('link', { name: 'CONTINUE WITH EMAIL' }).click();
await page.fill ('#email', 'kratika.gore+7012@joinworth.com');
await page.locator("//button[@type='submit']").click();
await page.fill ('#firstName', 'kratika');
await page.fill ('#lastName', 'gore');
await page.locator("//button[@text='NEXT']").click();
}

//Test Case 1 --Proceed with weak password
test('Test Case1', async ({page}) => {
await commonSteps (page);
await page.locator("//input[@id='password']").fill("123456");
await page.locator("//button[@text='NEXT']").click();
// const error =await page.error();
// console.error('Page error:', error.message);
const errorMessage =await page.locator("//p[@id='email-error']").textContent()
// Wait for the error message element to appear
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("Password must contain 8-20 characters, including uppercase, lowercase, number and a special character")).toBeTruthy()
await page.pause();

});

// //Test Case 2 --Proceed with strong password
// test ('Test Case2' ,async ({page}) => {
// await commonSteps (page);
// await page.fill ('#passwprd', 'Winjit@123');
// await page.getByRole('button', { name: 'CONTINUE' }).click();
// await page.waitForTimeout(3000);
// const url =await page.url();
// if (url =="https://app.dev.joinworth.com/login/confirm-signup") {
//   console.log("pass");
//       await expect(page).toHaveURL("https://app.dev.joinworth.com/login/confirm-signup");
//     } else {
//       console.log("fail");
//     }
//    await page.pause();
//   });

//   //Test Case 3 --Proceed with blank password
// test ('Test Case3', async ({page}) => {
// await commonSteps (page);
// await page.fill ('#password' , '');
// await page.getByRole('button', { name: 'CONTINUE' }).click();
// await page.waitForTimeout(3000);
// const error =await page.error();
// console.error('Page error:' ,error.message);
// await page.pause();
//   });
