import { Page, expect } from "@playwright/test";

export class TeamDetailsPage {
  private readonly teamHeader: string = '//div[@class="data-header__profile-container"]';

  constructor(private readonly page: Page) {}

  public async verifyTeamHeaderDisplayed() {
    await expect(this.page.locator(this.teamHeader)).toBeVisible();
  }
}
