import { Page, expect } from "@playwright/test";

export class TeamDetailsPage {
  private readonly teamHeader: string = '//div[@class="data-header__profile-container"]';
  private readonly UEFAChampionsLeagueHeader: string = '//img[@title="UEFA Champions League"]';

  constructor(private readonly page: Page) {}

  public async verifyTeamHeaderDisplayed() {
    await expect(this.page.locator(this.teamHeader)).toBeVisible();
  }

  public async verifyUEFAChampionsLeagueHeaderDisplayed() {
    await expect(this.page.locator(this.UEFAChampionsLeagueHeader)).toBeVisible();
  }
}
