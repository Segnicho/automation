import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login';
import { InventoryPage } from '../pages/Inventory';

test.describe('Inventory Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('users can add items to the cart', async ({ page, context }) => {
    context.clearCookies();
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.isLoaded();


    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.addItemToCart('Sauce Labs Bike Light');

    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe(2);
  });



  

  test('users can remove items from the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.isLoaded();

    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.addItemToCart('Sauce Labs Bike Light');
    await inventoryPage.removeItemFromCart('Sauce Labs Bike Light');

    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe(1);
  });

  test('users can view items in the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.isLoaded();

    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();

    const url = page.url();
    expect(url).toContain('/cart.html');
  });
});
