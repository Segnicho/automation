import {test, expect, chromium} from '@playwright/test';
import { LoginPage } from './pages/Login';

async function globalSetup() {
        const browser = await chromium.launch({})
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://www.saucedemo.com/')

        await this.page.fill('#user-name', "standard_user", );
        await this.page.fill('#password', "secret_sauce");
        await this.page.click('#login-button');
        
        // const loginPage = new LoginPage(page);
        // await loginPage.login('standard_user','secret_sauce');
        await context.storageState({path: './LoginAuth.json'})
}

export default globalSetup;