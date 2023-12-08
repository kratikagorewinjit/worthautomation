const {test ,expect} =require('@playwright/test');
const { chromium } = require('playwright');
test ('Hello world test', async ({page}) => {

      // Launch a new browser instance
 const browser = await chromium.launch();

 // Create a new browser context
 const context = await browser.newContext();
  // Navigate to a website (for example, Google)
  await page.goto('https://www.google.com');

  // Print "Hello, World!" to the console
  console.log('Hello, World!');

  // Close the browser
  await browser.close();
});
