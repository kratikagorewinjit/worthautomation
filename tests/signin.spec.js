const { test, expect } = require('@playwright/test');
const { url } = require('inspector');
const { chromium } = require('playwright');

// Define a function with common steps
async function commonSteps(page) {
await page.goto('https://app.dev.joinworth.com/');
await page.getByRole('link', { name: 'GET MY SCORE' }).click();
page.waitForTimeout(3000);
await page.getByRole('link', { name: 'CONTINUE WITH EMAIL' }).click();
await page.getByRole('button', { name: 'CONTINUE' }).click(); 
}

//Test Case 1 --Proceed without entering email id
test ('Test Case 1', async ({page}) => {
await commonSteps(page);
await page.fill ('#email','');
console.log ('Email is required');
await page.waitForTimeout(3000);
//Catch the error message with blank email strings
const errorMessage =await page.locator("//p[@id='email-error']").textContent()
// Wait for the error message element to appear
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("Email is required")).toBeTruthy()
await page.pause();
});
  
//Test Case 2 --Proceed with invalid email id
test ('Test Case 2' ,async ({page}) => {
await commonSteps (page);
await page.fill ('#email', 'worth@gmail.');
console.log('invalid email');
//Catch the error message with invalid email strings
const errorMessage =await page.locator("//p[@id='email-error']").textContent()
// Wait for the error message element to appear
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("Enter valid email")).toBeTruthy()
await page.pause();
});
 
//Test Case 3 --Proceed with valid registered email id
test ('Test Case 3' ,async ({page}) => {
await commonSteps (page);
await page.fill ('#email','kratika.gore+895@joinworth.com');
await page.getByRole('button', { name: 'CONTINUE' }).click(); 
await page.waitForTimeout(3000); 
const url =await page.url();
expect(url).toBe('https://app.dev.joinworth.com/login/password');
if (url === "https://app.dev.joinworth.com/login/password") {
      console.log("Already registered email id");
    } else {
      console.log ('Fail');
    }
   await page.pause();
  });

//Test Case 4 --Proceed with valid unregistered email id
test ('Test Case 4' ,async ({page}) => {
await commonSteps (page);
await page.fill ('#email', 'kratika.gore+892@joinworth.com');
await page.getByRole('button', { name: 'CONTINUE' }).click(); 
await page.waitForTimeout(3000); 
const url =await page.url();
expect(url).toBe('https://app.dev.joinworth.com/register/user');
if (url =="https://app.dev.joinworth.com/register/user") {
  console.log("New email id")
} else {
  console.log ('fail');
}
await page.pause();
});


  

