
const { test, expect, chromium } = require('@playwright/test');
const { fail } = require('assert');
const { error } = require('console');

test('get started link', async () => {
  async function openbrowser(url) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    return page;
  }

  // Case 1
  const page1 = await openbrowser('https://demo.joinworth.com/');
  await page1.getByRole('link', { name: 'GET MY SCORE' }).click();
  await page1.getByRole('link', { name: 'CONTINUE WITH EMAIL' }).click();
  await page1.getByRole('button', { name: 'CONTINUE' }).click();
  await page1.waitForTimeout(3000);
  const errormessageElement = await page1.getByText ('Email is Required');
const errormessage = await errormessageElement.textContent();
  if (errormessage ==='Email is Required') {
    console.log ('Test case Pass')
  } else {
    console.log ('Test case fail')
  }
 
  //  page1.on('pageerror', (error) => {
  //     console.error('Page1 error:', error);
  //  });

  
// Case 2
  const page2 = await openbrowser('https://demo.joinworth.com/');
  await page2.getByRole('link', { name: 'GET MY SCORE' }).click();
  await page2.getByRole('link', { name: 'CONTINUE WITH EMAIL' }).click();
  const emailInput2 = await page2.getByLabel('Email ID');
  await emailInput2.click();
  await emailInput2.fill('worth@gmail.');
  await page2.getByRole('button', { name: 'CONTINUE' }).click();
  const errormessageElement1 = await page2.getByText ('Invalid email');
  const errormessage1 = await errormessageElement1.textContent();
  if (errormessage1 ==='Invalid email') {
    console.log ('Test case Pass')
  } else {
    console.log ('Test case fail')
  }
  // page2.on('pageerror', (error) => {
  // console.error('page2 error:', error);
  // });

  // Case 3
  const page3 = await openbrowser('https://demo.joinworth.com/');
  await page3.getByRole('link', { name: 'GET MY SCORE' }).click();
  await page3.getByRole('link', { name: 'CONTINUE WITH EMAIL' }).click();
  const emailInput3 = await page3.getByLabel('Email ID');
  await emailInput3.click();
  await emailInput3.fill('worth@gmail.com');
  await page3.getByRole('button', { name: 'CONTINUE' }).click();
  
  await page3.waitForTimeout(3000);
  const url = await page3.url();
  
  
  if (url.toLowerCase() === 'https://demo.joinworth.com/login/password') {
    console.log('pass');
    //await expect(page3).toHaveURL('https://demo.joinworth.com/login');
  } else {
    console.log('fail');
  }
   page3.on('pageerror', (error) => {
     console.error('page3 error:', error);
   });
  // await page1.close();
  // await page2.close();
  // await page3.close();
});