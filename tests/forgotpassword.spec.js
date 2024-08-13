const { test, expect } = require('@playwright/test');
const { url } = require('inspector');
const { chromium } = require('playwright');

// Define a function with common steps
async function commonSteps(page) {
  await page.goto('https://app.dev.joinworth.com/');
  await page.getByRole('link', { name: 'GET MY SCORE' }).click();
  await page.getByRole('link', { name: 'CONTINUE WITH EMAIL' }).click();
  await page.getByLabel('Email ID').click();
  await page.getByLabel('Email ID').fill('kratikagore@gmail.com');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
}

//Test Case 1 --Proceeding to forgot password with blank email
test ('Test Case 1', async ({page}) => {
await commonSteps (page);
await page.fill ('#email', '');
await page.getByRole('button', { name: 'CONTINUE' }).click();
const error =await page.error();
console.error('page error:', error,message);
await page.pause();
});

// const errormessageElement = await page1.getByText ('Email is Required');
// const errormessage = await errormessageElement.textContent();
//   if (errormessage ==='Email is Required') {
//     console.log ('Test case Pass')
//   } else {
//     console.log ('Test case fail')
//   }
 
  
//Test Case 2 --Proceeding to forgot password with invalid email
test ('Test Case 2',async ({page}) => {
await commonSteps (page);
await page.fill ('#email', 'kratika.gore@joinworth.');
await page.getByRole('button', { name: 'CONTINUE' }).click();
const error =await page.error();
console.error('page error:', error,message);
await page.pause();
});

// const errormessageElement1 = await page2.getByText ('Invalid email');
// const errormessage1 = await errormessageElement1.textContent();
//   if (errormessage1 ==='Invalid email') {
//     console.log ('Test case Pass')
//   } else {
//     console.log ('Test case fail')
//   }
  
 //Test Case 3 --Proceeding to forgot password with valid email
 test ('Test Case 3', async ({page}) => {
await commonSteps (page);
await page.fill ('#email', 'kratika.gore+79@joinworth.com');
await page.getByRole('button', { name: 'CONTINUE' }).click();
await page.waitForTimeout(3000);
const url =await page.url ();
if (url =='https://app.dev.joinworth.com/login/reset-password') {
  console.log ('pass');
}
else {
  console.log ('fail');
}
await page.pause();
});

