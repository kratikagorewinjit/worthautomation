const { test, expect } = require('@playwright/test');

test('get started link', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  page.waitForTimeout(3000);

  // Navigate to a website
  await page.goto('https://app.dev.joinworth.com/');
  const pageTitle = await page.title();

  if (pageTitle === "applicant App") {
    console.log("pass");
    await expect(page).toHaveTitle("Applicant App");
  } else {
    console.log("Unexpected page title:", pageTitle);
  }

  await page.pause();
});