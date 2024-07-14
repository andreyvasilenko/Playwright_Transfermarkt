import { Page } from '@playwright/test';

export class HeaderNavigations {
    private readonly newsButton: string = '//li[@data-nav-group="news"]';
    private readonly newsButtonsCollecion: string = '//li[@data-nav-group="news"]//a';
    private readonly allNewsButton: string = '//a[@href="/aktuell/newsarchiv"]';
    private readonly marketValuesButton: string = '//a[@href="/navigation/marktwerte"]';
    private readonly hamburgerMenu: string = '//div[@class="hamburger"]/em';

    constructor(private readonly page: Page) {}
    
    public async clickOnHamburgeMenu() {
        await this.page.locator(this.hamburgerMenu).click();
    }

    public async hoverOverNewsButton() {
        await this.page.hover(this.newsButton);
    }

    public async clickOnAllNews() {
        await this.page.locator(this.allNewsButton).click();
    }

    public async clickOnMarketValues() {
        await this.page.locator(this.marketValuesButton).click();
    }
}
