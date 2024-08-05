import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";

test("Has a title called playwright", async ({ page }) => {
  allure.feature("Title Verification");
  allure.story("Check title of the Playwright homepage");

  await allure.step("Navigate to Playwright homepage", async () => {
    await page.goto("https://playwright.dev/");
  });

  await allure.step("Verify the title of the page", async () => {
    try {
      await expect(page).toHaveTitle(/Playwrigho/);
    } catch (error) {
      await allure.attachment(
        "Screenshot on Failure",
        await page.screenshot(),
        "image/png"
      );
      throw error;
    }
  });
});

test("get started link", async ({ page }) => {
  allure.feature("Navigation");
  allure.story("Verify 'Get Started' link");

  await allure.step("Navigate to Playwright homepage", async () => {
    await page.goto("https://playwright.dev/");
  });

  await allure.step("Click the 'Get started' link", async () => {
    console.log("This report has failed.");

    await page.getByRole("link", { name: "Get started" }).click();
  });

  await allure.step(
    "Verify the 'Installation' heading is visible",
    async () => {
      try {
        console.log("This report has reached here.");

        await expect(
          page.getByRole("heading", { name: "Installation" })
        ).toBeVisible();
      } catch (error) {
        await allure.attachment(
          "Screenshot on Failure",
          await page.screenshot(),
          "image/png"
        );
        throw error;
      }
    }
  );
});
