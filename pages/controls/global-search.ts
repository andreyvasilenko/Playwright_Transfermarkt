import { Page } from '@playwright/test';

export class GlobalSearchPage {
    private readonly globalSearch: string = 'xpath=//input[@class="tm-header__input--search-field"]';

    constructor(private readonly page: Page) {}
    
    public async clickOnTheGlobalSearch() {
        await this.page.locator(this.globalSearch).click();
    }

    public async performSearchInGlobalSearch(keyword) {
        await this.page.locator(this.globalSearch).fill(keyword);
        await this.page.locator(this.globalSearch).press('Enter');
    }
}
