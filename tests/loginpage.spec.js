const {test ,expect} =require('@playwright/test');
const { chromium } = require('playwright');


// Define a function with common steps
async function commonSteps(page) {
  //const page1 = await chromium.launch().then(browser => browser.newPage());
  await page.goto('https://admin.dev.joinworth.com/login');
}

  //Test Case 1 -- Logged with valid credential
  test ('Test Case 1', async({page}) => {
  //call the common step function
  await commonSteps (page);
   await page.fill('#email', 'kratika.gore@joinworth.com');
   await page.fill('#password', 'Winjit@1234');
   await page.waitForTimeout(3000);
  //Click the login button
  await page.locator("//button[@type='submit']").click();

  //Wait for navigation to complete
   await page.waitForNavigation();

  // Capture a screenshot (optional)
   await page.screenshot({ path: 'login-screenshot.png' });

  // // Close the browser
  // await browser.close();
 await page.pause();
  });

//Test Case 2 --Logged with invalid email id 
test ('Test Case 2', async ({page}) => {
//call the common step function
await commonSteps (page);
await page.fill('#email', 'kratika.gore@joinworth.');
await page.fill('#password', 'Winjit@1234');

//Click the login button
await page.locator("//button[@type='submit']").click();
await page.waitForTimeout(3000);
const url =await page.url();
// Check the login result and act accordingly
if (url === "https://admin.dev.joinworth.com/login") {
  console.log ("Invalid credential");
  await page.pause();
} else {
  console.log("Logged in successfully");
  await page.pause();
}
//Capture a screenshot (optional)
await page.screenshot({ path: 'login-screenshot.png' });
 });


//Test Case 3 --Try to log in with blank credential
test ('Test Case 3', async ({page}) => {
//call the common step function
await commonSteps (page);
await page.fill('#email', '');
await page.fill('#password', '');
await page.waitForTimeout(3000);
//Click the login button
await page.locator("//button[@type='submit']").click();
const url =await page.url();
// Check the login result and act accordingly
if (url === "https://admin.dev.joinworth.com/login") {
  console.log ("email & password is required");
  await page.pause();
} else {
  console.log("Logged in successfully");
  await page.pause();
}
 //Capture a screenshot (optional)
 await page.screenshot({ path: 'login-screenshot.png' });
});

//Test Case 4 --Catch the error message with invalid password strings
test('Test Case 4', async ({ page }) => {
// Call the common step function
await commonSteps(page);
// Fill email and password fields with invalid password strings
await page.fill('#email', 'kratika.gore@joinworth.com');
await page.fill('#password', 'Winjit@123');
// Click the login button
await page.locator("//button[@type='submit']").click();
await page.waitForTimeout(3000);
const errorMessage =await page.locator("//div[contains(text(),'Incorrect username or password.')]").textContent()
// Wait for the error message element to appear
console.log("Error message is "+errorMessage);
expect (errorMessage.includes("Incorrect")).toBeTruthy()
});

//Test Case 5 --Catch the error message with invalid email strings
test('Test Case 5', async ({ page }) => {
  // Call the common step function
  await commonSteps(page);

  // Fill email and password fields with invalid email strings
  await page.fill('#email', 'kratika.gore@joinworth.');
  await page.fill('#password', 'Winjit@1234');
  // Click the login button
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(3000);
  const errorMessage =await page.locator("//p[@id='email-error']").textContent()
  // Wait for the error message element to appear
  
  console.log("Error message is "+errorMessage);
  expect (errorMessage.includes("valid email")).toBeTruthy()
 
}); 

//Test Case 6 --Catch the error message with blank email and passord
test('Test Case 6', async ({ page }) => {
// Call the common step function
await commonSteps(page);

// Blank email and password fields
await page.fill('#email', '');
await page.fill('#password', '');
// Click the login button
await page.locator("//button[@type='submit']").click();
await page.waitForTimeout(3000);
const errorMessage =await page.locator("//div[@class='px-4 py-5 overflow-hidden rounded-lg bg-white sm:p-6 shadow sm:rounded-lg']//div[1]//div[1]//div[1]//p[1]").textContent()
// const errorMessage1=await page.locator("/html/body/div[1]/div/div[2]/div[2]/div/form/div[2]/div[1]/div/p/").textContent()
// Wait for the error message element to appear
  
console.log("Error message is "+errorMessage);
// console.log("Error message is" +errorMessage1);
expect (errorMessage.includes("Email")).toBeTruthy()
//expect (errorMessage1.includes("Password")).toBeTruthy()
 
});
 
