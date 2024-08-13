const { test, expect } = require('@playwright/test');
const { url } = require('inspector');
const { chromium } = require('playwright');

test('test', async ({ page }) => {
await page.goto('https://app.dev.joinworth.com/');
await page.getByRole('link', { name: 'GET MY SCORE' }).click();
await page.getByRole('button', { name: 'Continue with email' }).click();
await page.getByPlaceholder('Enter email id').click();
await page.getByPlaceholder('Enter email id').fill('kratika.gore+1735@joinworth.com');
await page.getByPlaceholder('Enter email id').press('Enter');
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('kratika');
await page.getByPlaceholder('Enter last name').fill('g');
await page.getByPlaceholder('Enter new password').fill('Winjit@123');
await page.getByPlaceholder('Confirm password').fill('Winjit@123');
await page.getByRole('checkbox').check();
await page.getByRole('button', { name: 'CONTINUE' }).click();
//Enter verification code have to handle manually
await page.waitForTimeout(5000);
await page.getByPlaceholder('Enter Tax ID Number (TIN)').fill('456234433');
await page.getByPlaceholder('Enter company name').fill('us');
await page.getByText('USS Midway MuseumNorth Harbor Drive, San Diego, CA').click();
await page.getByRole('button', { name: 'Validate' }).click();
await page.waitForTimeout(5000);
await page.locator("//div[@class=' css-19bb58m']").click();
await page.getByText('Agriculture, Forestry, Fishing and Hunting').click();
await page.getByRole('button', { name: 'Continue' }).click();
//Plaid connect have to handle manually
await page.waitForTimeout(5000);
await page.locator("//button[@id='headlessui-listbox-button-:rt:']").click();
await page.getByText('Limited Partner').click();
await page.locator("//input[@id='firstName']").fill('Leslie');
await page.locator("//input[@id='lastName']").fill('Knope');
await page.locator("//input[@placeholder='Enter mobile number']").fill('234-567-8909');
await page.locator("//input[@id='email']").fill('kratika.gore@joinworth.com');
await page.locator("//input[@id='street']").fill('123 Main St.');
await page.locator("//input[@id='city']").fill('Pawnee');
await page.locator("//input[@id='state']").fill('Indiana');
await page.locator("//input[@id='zip']").fill('46001');
await page.locator("//input[@placeholder='Select date of birth (MM/DD/YYYY)']").fill('01/18/1975');
await page.locator("//input[@id='ssn']").fill('123456789');
await page.locator("//span[@class='pad']").click();
//ownership summary
await page.locator("//button[normalize-space()='Continue']").click();
//Accounting screen
await page.locator("//span[@class='font-bold text-center text-xs ']").click();
//Tax consent screen
await page.locator("//button[@class='font-medium px-6 text-xs focus:outline-none transition ease-in duration-200 rounded bg-transparent active:ring-2 active:ring-offset-2 active:ring-indigo-900 active:ring-offset-indigo-200 ml-4 border py-2.5 border-black']").click();
//Review screen
await page.locator("//button[@type='submit']").click();
//Click on Subscribe button
await page.locator("//div//div//div//div//div//div//div//div[2]//div[1]//div[1]//button[1]//span[1]").click();
//Subscribe plan have to handle manually
});