import { test, Page, expect } from "@playwright/test";
import { LoginPage } from "../pages/Login";
import { InventoryPage } from "../pages/Inventory";
import { beforeEach } from "node:test";

test("users can login successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login("standard_user", "secret_sauce");

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.isLoaded();

  // Expect the URL to contain '/inventory.html'.
  expect(page.url()).toContain("/inventory.html");
  
});