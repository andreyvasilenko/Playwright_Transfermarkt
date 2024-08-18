import { test, expect } from "@playwright/test";
import { BasePage } from "./../pages/base.page";
import { ProfilePage } from "../pages/profile";

test("Header icons - Click on the Facebook icon and verify FB login page displayed @smoke @regression", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const basePage = new BasePage(page);
  await page.goto("/");
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await basePage.headerIcons.clickOnFacebookIcon(),
  ]);
  const fbLoginPage = new BasePage(newPage);
  await newPage.pause();
  await newPage.waitForTimeout(2000);
  await fbLoginPage.headerIcons.verifyFacebookLoginPageDisplayed();
});

test("Header icons - Click on the Twitter icon and verify Twitter page displayed @smoke @regression", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const basePage = new BasePage(page);
  await page.goto("/");
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await basePage.headerIcons.clickOnTwitterIcon(),
  ]);
  const twitterLoginPage = new BasePage(newPage);
  await newPage.pause();
  await newPage.waitForTimeout(3000);
  await twitterLoginPage.headerIcons.verifyTwitterPageDisplayed();
  /// why it always open UK account Transfermarkt.co.uk? despite I'm connecting in France or using vpn to USA/Germany
});

test("Header icons - Click on the Instagram icon and verify Instagram page displayed @smoke @regression", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const basePage = new BasePage(page);
  await page.goto("/");
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await basePage.headerIcons.clickOnInstagramIcon(),
  ]);
  const instagramLoginPage = new BasePage(newPage);
  await newPage.pause();
  await newPage.waitForTimeout(2000);
  await instagramLoginPage.headerIcons.verifyInstagramLoginPageDisplayed();
});

test("Header icons - Click on the Tiktok icon and verify Tiktok page displayed @smoke @regression", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const basePage = new BasePage(page);
  await page.goto("/");
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await basePage.headerIcons.clickOnTiktokIcon(),
  ]);
  const instagramLoginPage = new BasePage(newPage);
  await newPage.pause();
  await newPage.waitForTimeout(2000);
  await instagramLoginPage.headerIcons.verifyTiktokLoginPageDisplayed();
});
