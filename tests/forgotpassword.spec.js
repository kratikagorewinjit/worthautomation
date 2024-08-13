const { test, expect } = require('@playwright/test');
const { link } = require('fs');
const { chromium } = require('playwright');

//Define a common function with common steps
async function commonSteps(page) {
await page.goto('https://admin.dev.joinworth.com/');
await page.getByRole('link', { name: 'Forgot password?' }).click();
await page.getByPlaceholder('Email address').click();
}

//Test case 1 --Reset password with valid email id
test ('Test Case 1',async ({page}) => {
commonSteps (page);
await page.waitForTimeout(3000);
await page.fill('#email', 'kratika.gore@joinworth.com');
await page.getByRole('button', { name: 'SEND' }).click();
await page.pause();
});

//Test Case 2 --Reset password with invalid email id
test ('Test Case 2', async ({page}) => {
commonSteps (page);
await page.waitForTimeout(3000);
await page.fill('#email', 'kratika.gore@joinworth.');
await page.getByRole('button', { name: 'SEND' }).click();
await page.screenshot({ path: 'login-screenshot1.png' });
await page.pause();
});

//Test Case 3 --Reset password with blank email id
test ('Test Case 3', async ({page}) => {
commonSteps (page);
await page.waitForTimeout(3000);
await page.fill('#email', '');
await page.getByRole('button', { name: 'SEND' }).click();
await page.screenshot({ path: 'login-screenshot2.png' });
await page.pause();
});

//Test Case 4 --Hit the verification link from email
test ('Test Case 4', async ({page}) => {
//commonSteps (page);
await page.waitForTimeout(3000);
const verificationLink = 'https://admin.dev.joinworth.com/reset-password?token=eyJhbGciOiJIUzI1NiJ9.VTJGc2RHVmtYMTl3RUt1V1lndkhDbGpTSGRhTHkyVllQMzNBTVJtdUZUeTBrY2M2dDRZQU5lWW1NeWw4UFNNQVh5S0VZRDc5Z0lSVWRqT1dQNXhEV013aHpkSytwaDlqdGJyYjIwQTc1S2V3N2x2c2VBMGJPVytQd0dhWnAwR25wY2M5UVFMZ0lPSmo5bjRWUTVaaWpUd002eFozS0ZlTmg2ME1iVG9jYjFwcHR3ODR5OUY4ejR0d3BnLzFXYytvM2grM1ByelkxbDlYMWJpUTBVbjJ0Zz09.nulmDrcX7ZbrtD_tCohXWNlSJENe9OizCIzHmIxgPSU'; // Replace with a valid link
  console.log('Verification Link:', verificationLink);
  // Step 3: Navigate to Verification Link
  await page.goto(verificationLink);
  const content = await page.content();
if (content.includes('Set new password')) {
    console.log ("Valid verification link");
    await page.waitForTimeout(3000);
    await page.fill('#newPassword', 'Winjit@12345');
  await page.fill('#confirmPassword', 'Winjit@12345');
  await page.getByRole('button', { name: 'Save' }).click();
} else {
    console.log ("Verification link has expired")
}
  
});