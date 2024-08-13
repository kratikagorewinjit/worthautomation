const { test, expect } = require('@playwright/test');
const { url } = require('inspector');
const { chromium } = require('playwright');

test('test', async ({ page }) => {
    await page.goto('https://app.dev.joinworth.com/');
    await page.getByRole('link', { name: 'GET MY SCORE' }).click();
    await page.getByRole('link', { name: 'CONTINUE WITH EMAIL' }).click();
    await page.getByPlaceholder('Enter email address').click();
    await page.getByPlaceholder('Enter email address').fill('kratika.gore+1272@joinworth.com');
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('kratika');
    //await page.getByPlaceholder('Enter first name').press('Tab');
    await page.getByPlaceholder('Enter last name').fill('g');
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    await page.getByPlaceholder('Enter new password').click();
    await page.getByPlaceholder('Enter new password').fill('Winjit@123');
    await page.getByPlaceholder('Confirm password').fill('Winjit@123');
    await page.getByRole('button', { name: 'CONTINUE' }).click();
   //Enter verification code have to handle manually
    await page.waitForTimeout(5000);
    await page.locator("//span[@class='flex text-white text-center justify-center']").click();
    await page.locator("//input[@id='tin']").click();
    await page.locator("//input[@id='tin']").fill('844148434');
    await page.locator("//input[@id='companyname']").click();
    await page.locator("//input[@id='companyname']").fill('USS Midway Museum');
    await page.locator("//button[@type='submit']").click();
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(3000);
    await page.locator("//button[@type='submit']").click();
    await page.locator("//input[@id='street']").fill("910 North Harbor Drive ");
    await page.locator("//input[@id='zip']").fill("92101");
    await page.locator("//input[@id='city']").fill("San Diego");
    await page.locator("//input[@id='state']").fill("California");
    await page.locator("//button[@type='submit']").click();
    //To connect to plaid have to switch to iframe
    await iframe.locator("//button[normalize-space()='CONNECT']").click();
    const iframe =await page.frameLocator("//iframe[@id='plaid-link-iframe-1']");
    



  //   await page.getByRole('button', { name: 'NEXT' }).click();
  //   await page.fill ('#street', '3614 Cassaopolis St');
  //   await page.fill ('#zip', '46514');
  //   await page.fill ('#city', 'Elkhart');
  //   await page.fill ('#state', 'Indiana');
  //   await page.getByRole('button', { name: 'CONTINUE' }).click();
  //  // await page.locator("Selector").selectOption('Partner');
  //   await page.waitForTimeout(3000); 
  //   await page.getByLabel('Title*').click();
  //   await page.getByText('Partner', { exact: true }).click();
  //   await page.fill ('#firstName', 'kratika');
  //   await page.fill ('#lastName', 'gore');
  //   await page.getByPlaceholder('Select date of birth').click();
  //   await page.getByText('2', { exact: true }).first().click();
  //   await page.getByPlaceholder('Enter mobile number').click();
  //   await page.getByPlaceholder('Enter mobile number').fill('9492883523');
  //   // await page.getByPlaceholder('Select date of birth').click();
  //   // await page.waitForTimeout(3000);
  //   // await page.getByText('2', { exact: true }).first().click();
  //   // await page.getByPlaceholder('Enter mobile number').fill('(949) 288-3523');
  //   await page.fill ('#email', 'kratika.gore@joinworth.com');
  //   await page.fill ('#ssn', '876554340');
  //   await page.fill ('#street', '3614 Cassaopolis St');
  //   await page.fill ('#zip', '46514');
  //   await page.fill ('#city', 'Elkhart');
  //   await page.fill ('#state', 'Indiana');
  //   await page.getByRole('button', { name: 'CONTINUE' }).click();
  //   await page.getByRole('button', { name: 'CONTINUE' }).click();
  //   await page.waitForTimeout(5000);
  //   await page.getByRole('button', { name: 'Continue' }).click();
  //   await page.waitForTimeout(5000);
  //   await page.getByRole('button', { name: 'CONNECT' }).click();
  //   await page.waitForTimeout(3000);
  //   await page.frameLocator('iframe[title="Plaid Link"]').getByRole('button', { name: 'Continue' }).click();
  //   await page.waitForTimeout(3000);
  //   await page.frameLocator('iframe[title="Plaid Link"]').getByLabel('Citibank Online').click();
  //   // await page.frameLocator('iframe[title="Plaid Link"]').getByPlaceholder('User ID').click();
  //   // await page.frameLocator('iframe[title="Plaid Link"]').getByLabel('User ID').fill('user_good');
  //   // await page.frameLocator('iframe[title="Plaid Link"]').getByPlaceholder('Password').click();
  //   // await page.frameLocator('iframe[title="Plaid Link"]').getByLabel('Password').fill('pass_good');
  //   // await page.frameLocator('iframe[title="Plaid Link"]').getByRole('button', { name: 'Submit' }).click();
  //   // await page.frameLocator('iframe[title="Plaid Link"]').getByRole('button', { name: 'Continue' }).click();
  //   // await page.frameLocator('iframe[title="Plaid Link"]').getByRole('button', { name: 'Allow' }).click();
  //   // await page.getByRole('button', { name: 'CONTINUE' }).click();
  //   // await page.getByRole('button', { name: 'CONTINUE' }).click();
  });

