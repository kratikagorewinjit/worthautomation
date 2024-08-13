// @ts-check
const { test, expect } = require('@playwright/test');
const { fail } = require('assert');


test('get started link', async ({ browser }) => {
  
const context =await browser.newContext();
const page =await context.newPage();
page.waitForTimeout(3000);
    
await page.goto('https://demo.joinworth.com/');
await page.getByRole('link', { name: 'GET MY SCORE' }).click();
page.waitForTimeout(3000);

const url = await page.url();
expect(url).toBe('https://demo.joinworth.com/login');

    if (url === "https://demo.joinworth.com/login") {
        console.log("pass");
        //await expect(page).toHaveURL("https://demo.joinworth.com/login");
      } else {
        console.log("Unexpected page title:", fail);
      }
     await page.pause();


})
