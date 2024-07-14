import { Page, expect } from "@playwright/test";
// import log from '../../utils/logger/logger.js';

export class ProfilePage {
  private readonly infoBox: string = 'xpath=//div[@class="info-box"]';
  private readonly personalInfoBox: string = "#einstellungen-form";
  private readonly signatureBox: string = "#signatur-form";
  private readonly wall: string = "Wall";
  private readonly createPostSection: string =
    "#tm-user2gaestebuch-gaestebuchPosten-form";
  private readonly firstPost: string = "first post";
  private readonly friends: string = "Friends";
  private readonly searchFriends: string = "#userSuchen";
  private readonly playerWatchlist: string = "Player Watchlist";
  private readonly watchlistSection: string = "#watchlistKompakt";
  private readonly groundhopping: string = "Groundhopping";
  private readonly groundhoppingFilter: string = 'xpath=//table[@class="auflistung"]';
  private readonly groundhoppingGrid: string = "#yw0";
  private readonly groundhoppingAddNewMatchSection: string = 'xpath=//div[@class="box begegnung-suche"]';
  private readonly groundhoppingStats: string = "#groundhopping-stats";
  private readonly groundhoppingTopTeams: string = "#top-stadien";
  private readonly groundhoppingTopStadion: string = "#top-stadien";
  private readonly groundhoppingTopCountries: string = "#top-laender";
  private readonly groundhoppingTopCompetitions: string = "#top-wettbewerbe";
  private readonly groundhoppingTopPlayers: string = "#top-spieler";
  private readonly groundhoppingTopManagers: string = "#top-trainer";
  private readonly groundhoppingTopGoalscorers: string = "#top-torschuetzen";
  private readonly groundhoppingTopMarketValuablePlayers : string = "#top-marktwerte";
  private readonly dreamTeam: string = "Dream Team";
  private readonly dreamTeamSection: string = 'xpath=//div[@class="aufstellung-100"]';
  private readonly profile: string = "Profile";
  private readonly postsWorthReading: string = "Posts worth reading";
  private readonly postsWorthReadingHeader: string = 'xpath=//h2[@class="content-box-headline"]';

  constructor(private readonly page: Page) {}

  public async navigateToTheProfilePage() {
    // await this.page.pause();
    this.page.waitForLoadState('domcontentloaded')
    await this.page.goto("/profil/index");
    await this.page.pause();
  }

  public async verifyPersonalInfoBoxDisplayed() {
    // log.info("Click 'Facitity Filter' button");
    // await this.page.waitForTimeout(2000);
    const element = this.page.locator(this.personalInfoBox);
    await element.scrollIntoViewIfNeeded();
    await expect(this.page.locator(this.personalInfoBox)).toBeVisible();
  }

  public async verifySignatureBoxDisplayed() {
    // log.info("Click 'Facitity Filter' button");
    await expect(this.page.locator(this.signatureBox)).toBeVisible();
  }

  public async clickOnTheWallButton() {
    // log.info("Click 'Facitity Filter' button");
    await this.page.getByRole("link", { name: this.wall }).click();
    await this.page.pause();
  }

  public async verifyWallContainCreatePostSectionAndExisitingPosts() {
    // log.info("Click 'Facitity Filter' button");
    const element = this.page.locator(this.createPostSection);
    await element.scrollIntoViewIfNeeded();
    await this.page.pause();

    await expect(this.page.locator(this.createPostSection)).toBeVisible();
    await expect(this.page.getByText(this.firstPost)).toBeVisible();
  }

  public async clickOnTheFriendsButton() {
    // log.info("Click 'Facitity Filter' button");
    await this.page.getByRole("link", { name: this.friends }).click();
    await this.page.pause();
  }

  public async verifySearchFriendsSectionDisplayed() {
    // log.info("Click 'Facitity Filter' button");
    const element = this.page.locator(this.searchFriends);
    await element.scrollIntoViewIfNeeded();
    await this.page.pause();
    await expect(this.page.locator(this.searchFriends)).toBeVisible();
  }

  public async clickOnThePlayerWatchlistButton() {
    // log.info("Click 'Facitity Filter' button");
    await this.page.getByRole("link", { name: this.playerWatchlist }).click();
    await this.page.pause();
  }

  public async verifyWatchlistSectionDisplayed() {
    // log.info("Click 'Facitity Filter' button");
    const element = this.page.locator(this.watchlistSection);
    await element.scrollIntoViewIfNeeded();
    await this.page.pause();
    await expect(this.page.locator(this.watchlistSection)).toBeVisible();
  }

  public async clickOnTheGroundhoppingButton() {
    // log.info("Click 'Facitity Filter' button");
    await this.page.getByRole("link", { name: this.groundhopping }).click();
    await this.page.pause();
  }

  public async verifyGroundhoppingSectionsDisplayed() {
    // log.info("Click 'Facitity Filter' button");
    const element = this.page.locator(this.groundhoppingTopMarketValuablePlayers);
    await element.scrollIntoViewIfNeeded();
    await this.page.pause();
    await expect.soft(this.page.locator(this.groundhoppingFilter)).toBeVisible();
    await expect.soft(this.page.locator(this.groundhoppingGrid)).toBeVisible();
    await expect.soft(this.page.locator(this.groundhoppingAddNewMatchSection)).toBeVisible();
    await expect.soft(this.page.locator(this.groundhoppingAddNewMatchSection)).toBeVisible();
    await expect.soft(this.page.locator(this.groundhoppingStats)).toBeVisible();
    await expect.soft(this.page.locator(this.groundhoppingTopTeams)).toBeAttached();
    await expect.soft(this.page.locator(this.groundhoppingTopStadion)).toBeAttached();
    await expect.soft(this.page.locator(this.groundhoppingTopCountries)).toBeAttached();
    await expect.soft(this.page.locator(this.groundhoppingTopCompetitions)).toBeAttached();
    await expect.soft(this.page.locator(this.groundhoppingTopPlayers)).toBeAttached();
    await expect.soft(this.page.locator(this.groundhoppingTopManagers)).toBeAttached();
    await expect.soft(this.page.locator(this.groundhoppingTopGoalscorers)).toBeAttached();
    await expect.soft(this.page.locator(this.groundhoppingTopMarketValuablePlayers)).toBeAttached();
  }

  public async clickOnTheDreamTeamButton() {
    // log.info("Click 'Facitity Filter' button");
    await this.page.getByRole("link", { name: this.dreamTeam }).click();
    await this.page.pause();
  }

  public async verifyDreamTeamSectionDisplayed() {
    // log.info("Click 'Facitity Filter' button");
    const element = this.page.locator(this.dreamTeamSection);
    await element.scrollIntoViewIfNeeded();
    await this.page.pause();
    await expect(this.page.locator(this.dreamTeamSection)).toBeVisible();
  }

  public async clickOnTheProfileButton() {
    // log.info("Click 'Facitity Filter' button");
    await this.page.getByRole("link", { name: this.profile }).click();
    await this.page.pause();
  }

  public async clickOnThePostsWorthReadingButton() {
    // log.info("Click 'Facitity Filter' button");
    await this.page.getByRole("link", { name: this.postsWorthReading }).click();
    await this.page.pause();
  }

  public async verifyPostsWorthReadingHeaderDisplayed() {
    // log.info("Click 'Facitity Filter' button");
    const element = this.page.locator(this.postsWorthReadingHeader);
    await element.scrollIntoViewIfNeeded();
    await this.page.pause();
    await expect(this.page.locator(this.postsWorthReadingHeader)).toBeVisible();
  }
}
