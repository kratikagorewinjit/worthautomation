const { test, expect } = require('@playwright/test');
const { error } = require('console');
const { url } = require('inspector');
const { chromium } = require('playwright');

// Define a function with common steps
async function commonSteps(page) {
  //const page1 = await chromium.launch().then(browser => browser.newPage());
  await page.goto('https://customer.dev.joinworth.com/login');
   // Click the login button
}


//Test Case 1 -- Logged with valid credential
test ('Test Case 1', async({page}) => {
//call the common step function
await commonSteps (page);
await page.fill ('#email', 'kratika.gore+2@joinworth.com');
await page.fill ('#password' , 'Winjit@1234');
await page.getByRole('button', { name: 'LOGIN' }).click();
await page.waitForTimeout(3000);
// Assert the current URL after login
const currentUrl = page.url();
//expect(currentUrl).toBe('https://customer.dev.joinworth.com/cases?page=1&itemsPerPage=10&filter=data_cases.status%255B0%255D%3D4');
// Log the result
if (currentUrl === 'https://customer.dev.joinworth.com/cases?page=1&itemsPerPage=10&filter=data_cases.status%255B0%255D%3D4')
  {
  console.log('Logged in successfully');
  } 
else 
  {
  console.error('Login failed. Unexpected URL:', currentUrl);
  }
});

//Test Case 2 --Logged with invalid email id 
test ('Test Case 2', async ({page}) => {
//call the common step function
await commonSteps (page);
await page.fill ('#email', 'kratika.gore+2@joinworth.');
await page.fill ('#password', 'Winjit@1234');
await page.getByRole('button', { name: 'LOGIN' }).click();
const url =await page.url();
// Check the login result and act accordingly
if (url === "https://customer.dev.joinworth.com/login") 
  {
  console.log ("Invalid credential");
  await page.pause();
  } 
else 
  {
  console.log("Logged in successfully");
  //await page.pause();
  }
});

//Test Case 3 --Try to log in with blank credential
test ('Test Case 3', async ({page}) => {
//call the common step function
await commonSteps (page);
await page.fill ('#email', '');
await page.fill ('#password', '');
await page.getByRole('button', { name: 'LOGIN' }).click();
const url =await page.url();
// Check the login result and act accordingly
if (url === "https://customer.dev.joinworth.com/login")
  {
  console.log ("email & password is required");
  await page.pause();
  } 
else 
  {
  console.log("Logged in successfully");
//await page.pause();
  }
});

//Test Case 4 --Catch the error message with invalid password strings
test('Test Case 4', async ({ page }) => {
// Call the common step function
await commonSteps(page);
// Fill email and password fields with invalid password strings
await page.fill('#email', 'kratika.gore+2@joinworth.com');
await page.fill('#password', 'Winjit@123');

// Click the login button
await page.getByRole('button', { name: 'LOGIN' }).click();
await page.waitForTimeout(3000);

const errorMessage =await page.locator("//div[contains(text(),'Incorrect username or password.')]").textContent()
//Wait for the error message element to appear
  
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("Incorrect username or password")).toBeTruthy()
 
});

//Test Case 5 --Catch the error message with invalid email strings
test('Test Case 5', async ({ page }) => {
// Call the common step function
await commonSteps(page);

// Fill email and password fields with invalid email strings
await page.fill('#email', 'kratika.gore+2@joinworth.');
await page.fill('#password', 'Winjit@1234');

// Click the login button
await page.getByRole('button', { name: 'LOGIN' }).click();
await page.waitForTimeout(3000);

const errorMessage =await page.locator("//p[@id='email-error']").textContent()
// Wait for the error message element to appear
  
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("Enter valid email")).toBeTruthy()
 
}); 
 
//Test Case 6 --Catch the error message with blank email and passord
test('Test Case 6', async ({ page }) => {
// Call the common step function
await commonSteps(page);

// Fill email and password fields with invalid email strings
await page.fill('#email', '');
await page.fill('#password', 'Winjit@1234');

// Click the login button
await page.getByRole('button', { name: 'LOGIN' }).click();
await page.waitForTimeout(3000);

const errorMessage =await page.locator("//div[@class='px-4 py-5 overflow-hidden rounded-lg bg-white sm:p-6 shadow sm:rounded-lg']//div[1]//div[1]//div[1]//p[1]").textContent()
// Wait for the error message element to appear
  
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("Email")).toBeTruthy()
 
}); 