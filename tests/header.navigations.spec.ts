import { test, expect } from "@playwright/test";
import { BasePage } from './../pages/base.page';
import { ProfilePage } from "../pages/profile";

test("Header Navigations - Click on the all news page @smoke", async ({ page }) => {
  const profile = new ProfilePage(page);
  const basePage = new BasePage(page);
  await page.goto("/");
  await profile.navigateToTheProfilePage();
  // step beforre ui update
  // await basePage.headerNavigations.hoverOverNewsButton();
  await basePage.headerNavigations.clickOnHamburgeMenu();
  await basePage.headerNavigations.clickOnAllNews();  
  await page.pause();
  await page.waitForTimeout(9000);
});

test("Header Navigations - Click on the market values page @smoke @regression", async ({ page }) => {
    const profile = new ProfilePage(page);
    const basePage = new BasePage(page);
    await page.goto("/");
    await profile.navigateToTheProfilePage();
    // await basePage.headerNavigations.hoverOverNewsButton();
    await basePage.headerNavigations.clickOnMarketValues();  
    await page.pause();
    await page.waitForTimeout(9000);
  });