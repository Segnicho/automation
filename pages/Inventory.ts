import { Page } from "playwright";

export class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded(): Promise<boolean> {
    return await this.page.isVisible(".inventory_list");
  }

  async addItemToCart(itemName: string) {
    const itemElement = this.page.locator(`.inventory_item:has-text("${itemName}")`);
    await itemElement.locator('button:has-text("Add to cart")').click();
  }

  async removeItemFromCart(itemName: string) {
    const itemElement = this.page.locator(`.inventory_item:has-text("${itemName}")`);
    await itemElement.locator('button:has-text("Remove")').click();
  }

  async getCartCount(): Promise<number> {
    const cartCount = await this.page.textContent(".shopping_cart_badge");
    return cartCount ? parseInt(cartCount) : 0;
  }

  async goToCart() {
    await this.page.click(".shopping_cart_link");
  }
}
