import { Page, expect } from "@playwright/test";
// import log from '../../utils/logger/logger.js';

export class TeamDetailsPage {
  private readonly teamHeader: string = '//div[@class="data-header__profile-container"]';

  constructor(private readonly page: Page) {}

  public async verifyTeamHeaderDisplayed() {
    await expect(this.page.locator(this.teamHeader)).toBeVisible();
  }
}
