const {test ,expect} =require('@playwright/test');
const { chromium } = require('playwright');

  test('Login validation test', async ({ page }) => {
    async function openbrowser(url) {
     const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto(url);
      return page;
    }
   // Navigate to the login page
   const page1 =await openbrowser('https://admin.dev.joinworth.com/');

   //Case 1 -- Fill in the login form with valid credential
   await page1.fill('#email', 'kratika.gore@joinworth.com');
   await page1.fill('#password', 'Winjit@1234');
 await page1.waitForTimeout(3000);
   // Click the login button
   await page1.click('//*[@id="root"]/div[1]/div/div[2]/div/form/div[3]/button/div');

  // Wait for navigation to complete
  await page1.waitForNavigation();

  // Capture a screenshot (optional)
  await page1.screenshot({ path: 'login-screenshot.png' });

  // // Close the browser
  // await browser.close();
  await page1.pause();

  //Case 2 -- Fill in the login form with invalid credential
  const page2 =await openbrowser('https://admin.dev.joinworth.com/');
   await page2.fill('#email', 'kratika.gore@joinworth.');
   await page2.fill('#password', 'Winjit@1234');
 await page2.waitForTimeout(3000);
   // Click the login button
   await page2.click('//*[@id="root"]/div[1]/div/div[2]/div/form/div[3]/button/div');

   // Capture a screenshot (optional)
  await page2.screenshot({ path: 'login-screenshot.png' });

  //Case 3 -- Try to proceed with blank credential
  const page3 =await openbrowser('https://admin.dev.joinworth.com/');
   await page3.fill('#email', '');
   await page3.fill('#password', '');
 await page3.waitForTimeout(3000);
   // Click the login button
   await page3.click('//*[@id="root"]/div[1]/div/div[2]/div/form/div[3]/button/div');

   // Capture a screenshot (optional)
  await page3.screenshot({ path: 'login-screenshot.png' });
  
});


