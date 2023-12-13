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
   //Add new customer
 await page1.getByRole('button', { name: 'Dismiss' }).click();
  await page1.waitForTimeout(3000);
  await page1.click('//*[@id="root"]/div[1]/div[1]/main/div/div/div[1]/div/div/button/p');
  await page1.fill('#firstName', 'kratika gore');
  await page1.fill('#lastName', 'goree');
  await page1.fill('#email', 'kratika.gore+42@joinworth.com');
  await page1.fill('#companyName', 'winjit pune');
  await page1.click('//*[@id="root"]/div[1]/div[2]/div/main/div/div/form/div[5]/div/button[2]/div/span');

  await page1.pause();

  
});

