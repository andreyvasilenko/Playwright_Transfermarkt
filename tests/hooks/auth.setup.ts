import { test as setup, expect } from '@playwright/test';
import { loginInfoProd } from '../../playwright.config.js';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto(loginInfoProd.loginUrl);
  await page.frameLocator('iframe[title="Iframe title"]').getByLabel('Accept & continue').click();
  await page.getByText('Log in').click();
  await page.getByPlaceholder('Username').fill(loginInfoProd.username);
  await page.getByPlaceholder('Password').fill(loginInfoProd.password);
  await page.getByRole('button', { name: 'Login' }).click();
  const userSection = page.locator('.tm-header__login');
  await userSection.waitFor();
  await page.context().storageState({ path: authFile });
});