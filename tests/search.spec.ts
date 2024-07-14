import { test, expect } from "@playwright/test";
import { GlobalSearchPage } from "../pages/controls/global-search";
import { SearchResultsPage } from "../pages/search-results";
import { TeamDetailsPage } from "../pages/team-details";

import { ProfilePage } from "../pages/profile";
import { BasePage } from './../pages/base.page';

test("Global Search @smoke", async ({ page }) => {
    const basePage = new BasePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    const teamDetailsPage = new TeamDetailsPage(page);
    await page.goto("/");
    await basePage.globalSearch.clickOnTheGlobalSearch();
    await basePage.globalSearch.performSearchInGlobalSearch("Arsenal");
    await searchResultsPage.clickOnTheFirstTeam();
    await teamDetailsPage.verifyTeamHeaderDisplayed()
  });