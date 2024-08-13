// @ts-check
const { test, expect } = require('@playwright/test');
const { fail } = require('assert');
const { url } = require('inspector');


test('get started link', async ({ browser }) => {
  
  const context =await browser.newContext();
   const page =await context.newPage();
     page.waitForTimeout(3000);

     await page.goto('https://demo.joinworth.com/');
   await page.getByRole('link', { name: 'GET MY SCORE' }).click();
page.waitForTimeout(3000);
await page.getByRole('link', { name: 'CONTINUE WITH EMAIL' }).click();
  await page.getByRole('button', { name: 'CONTINUE' }).click();

//   const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Please enter some input: ', (userInput) => {
//   console.log(`You entered: ${userInput}`);
//   //await page.pause();
// })
//  // rl.close();
// });
//   await page.pause();
// }
//})

 // Case: Proceed without entering email id
 
  const emailInput = await page.getByLabel('Email ID');
  await emailInput.click();
  await emailInput.fill('');



  if (await page.isVisible('text=Email is required')) {
    console.log('Email is required');
  } else {
    // Case: Proceed with invalid email id
    await emailInput.click();
    await emailInput.fill('kratikagore@gmail.');
  }
    if (await page.isVisible('text=Invalid email')) {
      console.log('Invalid email');
    } else {
      // Case: Proceed with valid email id
      await emailInput.click();
      await emailInput.fill('kratikagore@gmail.com');
      await page.getByRole('button', { name: 'CONTINUE' }).click();
    await page.pause();
//     }
 }})