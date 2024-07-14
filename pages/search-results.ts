import { Page, expect } from "@playwright/test";
// import log from '../../utils/logger/logger.js';

export class SearchResultsPage {
  private readonly arsenalInSearchesults: string = '//a[@title="Arsenal FC"]';

  constructor(private readonly page: Page) {}

  public async clickOnTheFirstTeam() {
    await this.page.locator(this.arsenalInSearchesults).first().click();
  }
}
