import { Page, expect } from '@playwright/test';
import { HeaderIcons } from './controls/header-icons.controls';
import { HeaderNavigations } from './controls/header-navigations.control';
import { GlobalSearchPage } from './controls/global-search'
import { ProfileIcons } from './controls/profile.controls';

export class BasePage {
    public readonly headerIcons: HeaderIcons;
    public readonly headerNavigations: HeaderNavigations;
    public readonly globalSearch: GlobalSearchPage;
    public readonly profileIcons: ProfileIcons;

    constructor(protected readonly page: Page) {
        this.headerIcons = new HeaderIcons(this.page);
        this.headerNavigations = new HeaderNavigations(this.page);
        this.globalSearch = new GlobalSearchPage(this.page);
        this.profileIcons = new ProfileIcons(this.page);
    }
}
