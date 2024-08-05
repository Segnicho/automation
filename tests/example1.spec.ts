import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";

test('Has a title called playwrigo', async ({ page }) => {
  await page.goto('https://playwright.dev/');


  // Expect a title "to contain" a substring.
  console.error("This report has failed.")
  allure.description(" the text playwright was not visible. ")

  await expect(page).toHaveTitle(/Playwright/);
  
  // const screenShotpath = `../test-results/example-Has-a-title-called-playwright-chromium/test-failed-x.png`;
  // await page.screenshot({ path: screenShotpath });

  // test.info().attachments.push({
  //   name: 'screenshot',
  //   path: screenShotpath,
  //   contentType: 'image/png',
  // });


});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const screenshotPath = await page.screenshot();
  allure.attachment('Screenshot on failure', screenshotPath, 'image/png');
  

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installations' })).toBeVisible({
    
  });
});
