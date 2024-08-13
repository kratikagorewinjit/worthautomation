import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.dev.joinworth.com/');
  await page.getByRole('link', { name: 'GET MY SCORE' }).click();
  await page.getByRole('button', { name: 'Continue with email' }).click();
  await page.getByPlaceholder('Enter email id').click();
  await page.getByPlaceholder('Enter email id').fill('kratika.gore+1697@joinworth.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('krati');
  await page.getByPlaceholder('Enter first name').press('Tab');
  await page.getByPlaceholder('Enter last name').fill('gore');
  await page.getByPlaceholder('Enter new password').click();
  await page.getByPlaceholder('Enter new password').press('CapsLock');
  await page.getByPlaceholder('Enter new password').fill('W');
  await page.getByPlaceholder('Enter new password').press('CapsLock');
  await page.getByPlaceholder('Enter new password').fill('Winjit@123');
  await page.getByPlaceholder('Confirm password').click();
  await page.getByPlaceholder('Confirm password').press('CapsLock');
  await page.getByPlaceholder('Confirm password').fill('W');
  await page.getByPlaceholder('Confirm password').press('CapsLock');
  await page.getByPlaceholder('Confirm password').fill('Winjit@123');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('input:nth-child(6)').fill('126035');
  await page.locator('.w-8').first().click({
    modifiers: ['Control']
  });
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByPlaceholder('Enter Tax ID Number (TIN)').click();
  await page.getByPlaceholder('Enter Tax ID Number (TIN)').fill('324354467');
  await page.getByPlaceholder('Enter company name').click();
  await page.getByPlaceholder('Enter company name').fill('us');
  await page.getByText('USS Midway MuseumNorth Harbor Drive, San Diego, CA').click();
  await page.getByRole('button', { name: 'Validate' }).click();
  await page.locator("//div[@class=' css-19bb58m']").click();
 // await page.locator('.css-19bb58m').click();
  await page.getByRole('option', { name: 'Agriculture, Forestry, Fishing and Hunting' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //*[@id="root"]/div/div[2]/div[1]/div[4]/div/div[2]/div/form/div/div[1]/div[2]/div/div[1]/div[2]
});