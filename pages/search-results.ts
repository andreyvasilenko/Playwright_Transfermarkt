import { Page, expect } from "@playwright/test";

export class SearchResultsPage {
  private readonly arsenalInSearchesults: string = '//a[@title="Arsenal FC"]';
  private readonly UEFAChampionsLeagueInSearchesults: string = '//a[@title="UEFA Champions League"]';

  constructor(private readonly page: Page) {}

  public async clickOnTheFirstTeam() {
    await this.page.locator(this.arsenalInSearchesults).first().click();
  }

  public async clickOnTheChampionsLeagueCompetition() {
    await this.page.locator(this.UEFAChampionsLeagueInSearchesults).first().click();
  }
}
