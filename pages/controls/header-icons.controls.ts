import { Page, expect } from "@playwright/test";

export class HeaderIcons {
  private readonly logoIMG: string = '//img[@class="icon-logo"]';
  private readonly iconFacebook: string =
    '//a[@href="https://www.facebook.com/transfermarkt.global"]/img';
  private readonly iconTwitter: string =
    '//a[@href="https://twitter.com/TMuk_news"]/img';
  private readonly iconInstagram: string =
    '//a[@href="https://www.instagram.com/transfermarkt_official/"]/img';
  private readonly iconRSS: string = '//a[@href="/intern/rssguide"]/img';
  private readonly iconTiktok: string =
    '//a[@href="https://www.tiktok.com/@transfermarkt"]/img';
  private readonly facebookLogin: string = "#login_popup_cta_form";
  private readonly RSSHeaders: string =
    '//h2[@class="content-box-headline"]';

  constructor(private readonly page: Page) {}

  public async clickOnLogo() {
    await this.page.locator(this.logoIMG).click();
  }

  public async clickOnFacebookIcon() {
    await this.page.locator(this.iconFacebook).click();
  }

  public async clickOnTwitterIcon() {
    await this.page.locator(this.iconTwitter).click();
  }

  public async clickOnInstagramIcon() {
    await this.page.locator(this.iconInstagram).click();
  }

  public async clickOnRSSIcon() {
    await this.page.locator(this.iconRSS).click();
  }

  public async clickOnTiktokIcon() {
    await this.page.locator(this.iconTiktok).click();
  }

  public async verifyFacebookLoginPageDisplayed() {
    await expect(this.page.locator(this.facebookLogin)).toBeVisible();
    expect(this.page.url()).toContain(
      "https://www.facebook.com/transfermarkt.global"
    );
  }

  public async verifyTwitterPageDisplayed() {
    const url = this.page.url();
    if (url.includes("login")) {
      expect(this.page.url()).toContain(
        "https://x.com/i/flow/login?redirect_after_login=%2FTMuk_news"
      );
    } else {
      expect(this.page.url()).toContain("https://twitter.com/TMuk_news");
    }
  }

  public async verifyInstagramLoginPageDisplayed() {
    expect(this.page.url()).toContain(
      "https://www.instagram.com/transfermarkt_official"
    );
  }

  public async verifyTiktokLoginPageDisplayed() {
    expect(this.page.url()).toContain("https://www.tiktok.com/@transfermarkt");
  }

  public async verifyAppropriateRSSHeadersDisplayed(RSSHeaders) {
    const rows = this.page.locator(this.RSSHeaders);
    const count = await rows.count();
    for (let i = 0; i < count; ++i) {
      const RSSHeadersFromPage = await rows.nth(i).textContent();
      const RSSHeadersFromList = RSSHeaders[i];
      expect.soft(RSSHeadersFromPage).toContain(RSSHeadersFromList);
    }
  }
}
