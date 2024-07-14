import { Page } from '@playwright/test';

export class HeaderNavigations {
    private readonly newsButton: string = '//li[@data-nav-group="news"]';
    private readonly newsButtonsCollecion: string = '//li[@data-nav-group="news"]//a';
    private readonly allNewsButton: string = '//a[@href="/aktuell/newsarchiv"]';
    private readonly marketValuesButton: string = '//a[@href="/navigation/marktwerte"]';
    private readonly hamburgerMenu: string = '//div[@class="hamburger"]/em';

    constructor(private readonly page: Page) {}
    
    public async clickOnHamburgeMenu() {
        // log.info("Click 'Saved Views' button");
        await this.page.locator(this.hamburgerMenu).click();
    }

    public async hoverOverNewsButton() {
        // log.info("Click 'Facitity Filter' button");
        await this.page.hover(this.newsButton);
    }

    public async clickOnAllNews() {
        // log.info("Click 'Saved Views' button");
        await this.page.locator(this.allNewsButton).click();
    }

    public async clickOnMarketValues() {
        // log.info("Click 'Apply' filter button");
        await this.page.locator(this.marketValuesButton).click();
    }
}
