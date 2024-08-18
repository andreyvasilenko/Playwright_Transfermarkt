import { test, expect } from "@playwright/test";
import { GlobalSearchPage } from "../pages/controls/global-search";
import { ProfilePage } from "../pages/profile";
import { BasePage } from './../pages/base.page';

test("Verify user successfully signed in @smoke @regression", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".tm-header__login").first()).toBeVisible();
});

test("Account Details page @smoke @regression", async ({ page }) => {
  const profile = new ProfilePage(page);
  await page.goto("/");
  await profile.navigateToTheProfilePage();
  await profile.verifyPersonalInfoBoxDisplayed();
  await profile.verifySignatureBoxDisplayed();
});

test("Account Details - Wall page @smoke @regression", async ({ page }) => {
  const profile = new ProfilePage(page);
  await page.goto("/");
  await profile.navigateToTheProfilePage();
  await profile.clickOnTheWallButton();
  await profile.verifyWallContainCreatePostSectionAndExisitingPosts();
});

test("Account Details - Friends page @smoke @regression", async ({ page }) => {
  const profile = new ProfilePage(page);
  await page.goto("/");
  await profile.navigateToTheProfilePage();
  await profile.clickOnTheFriendsButton();
  await profile.verifySearchFriendsSectionDisplayed();
});

test("Account Details - Watchlist page @smoke @regression", async ({ page }) => {
  const profile = new ProfilePage(page);
  await page.goto("/");
  await profile.navigateToTheProfilePage();
  await profile.clickOnThePlayerWatchlistButton();
  await profile.verifyWatchlistSectionDisplayed();
});

test("Account Details - Groundhopping page @smoke @regression", async ({ page }) => {
  const profile = new ProfilePage(page);
  await page.goto("/");
  await profile.navigateToTheProfilePage();
  await profile.clickOnTheGroundhoppingButton();
  await profile.verifyGroundhoppingSectionsDisplayed();
});

test("Account Details - Dream Team page @smoke @regression", async ({ page }) => {
  const profile = new ProfilePage(page);
  await page.goto("/");
  await profile.navigateToTheProfilePage();
  await profile.clickOnTheDreamTeamButton();
  await profile.verifyDreamTeamSectionDisplayed();
});

test("Account Details - Profile page @smoke @regression", async ({ page }) => {
  const profile = new ProfilePage(page);
  await page.goto("/");
  await profile.navigateToTheProfilePage();
  await profile.clickOnTheProfileButton();
  await profile.verifyPersonalInfoBoxDisplayed();
});

test("Account Details - Posts Worth Reading page @smoke @regression", async ({ page }) => {
  const profile = new ProfilePage(page);
  await page.goto("/");
  await profile.navigateToTheProfilePage();
  await profile.clickOnThePostsWorthReadingButton();
  await profile.verifyPostsWorthReadingHeaderDisplayed();
});

test("Account Icons - Click on the Favorite Club icon and verify apropriate options displayed @smoke @regression", async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto("/");
  await basePage.profileIcons.clickOnFavoriteClubIcon();
  await page.pause();
  await page.waitForTimeout(9000);
  await basePage.profileIcons.verifyFavoriteClubOptionsDisplayed();
});

test("Account Icons - Click on the Profile icon and verify appropriate buttons displayed @smoke @regression", async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto("/");
  await basePage.profileIcons.clickOnProfileIcon();
  await page.pause();
  await page.waitForTimeout(9000);
  await basePage.profileIcons.verifyDropdownProfileOptionsDisplayed();
});

test("Account Icons - Click on the Notifications icon and verify setttings button displayed @smoke @regression", async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto("/");
  await basePage.profileIcons.clickOnProfileIcon();
  await page.pause();
  await page.waitForTimeout(9000);
  await basePage.profileIcons.verifyNotificationIconAndSettingsButtonDisplayed();
});

test("Account Icons - Click on the Private Messages @smoke @regression", async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto("/");
  await basePage.profileIcons.clickOnProfileIcon();
  await page.pause();
  await page.waitForTimeout(9000);
  await basePage.profileIcons.verifyPrivateMessagesHintAndFooterDisplayed();
});

test("Account Icons - Click on the Favorite icon @smoke @regression", async ({ page }) => {
  const basePage = new BasePage(page);
  await page.goto("/");
  await basePage.profileIcons.clickOnfFavoritesIcon();
  await page.pause();
  await page.waitForTimeout(9000);
  await basePage.profileIcons.verifyAddFavoriteDisplayed();
});

test("Account Details - Wall page: create new post @smoke @regression @debug", async ({ page }) => {
  const profile = new ProfilePage(page);
  await page.goto("/");
  await profile.navigateToTheProfilePage();
  await profile.clickOnTheWallButton();
  await profile.verifyWallContainCreatePostSectionAndExisitingPosts();
  await profile.createPostWithText("autotest_post");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var dateValue = dd + "." + mm + "." + yyyy;
  console.log(dateValue);
  await profile.verifyNewPostWithTextCreated(dateValue);
});

test("Account Details - Wall page: remove post created by Automation Tests @smoke @regression", async ({ page }) => {

});