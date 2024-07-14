import { Page, expect } from '@playwright/test';
// import log from '../../utils/logger/logger.js';

export class ProfileIcons {
    // private readonly globalSearch: string = 'xpath=//input[@class="tm-header__input--search-field"]';
    // private readonly favoriteClubIcon: string = '//button[@title="My club"]';
    private readonly favoriteClubIcon: string = 'club icon';
    // private readonly profileIcon: string = '//button[@title="Mein Profil"]';
    private readonly profileIcon: string = 'user icon';
    // private readonly notificationsIcon: string = '.notifications';
    private readonly notificationsIcon: string = '//img[@alt="notifications"]';
    private readonly notificationsSettingsIcon: string = '//a[@href="/meintm/benachrichtigungen/profil"]';
    private readonly privateMessagesIcon: string = '.private-messages';
    private readonly favoritesIcon: string = '.favorites';
    private readonly overviewButton: string = 'Overview';
    private readonly newsButton: string = '#news';
    private readonly scheduleButton: string = 'Schedule';
    private readonly rumorsButton: string = '#geruechte';
    private readonly forumButton: string = '#forum';
    private readonly profilButton: string = '#profil';
    private readonly settingsButton: string = '#einstellungen';
    private readonly logoutButton: string = '#abmelden';
    // private readonly notificationSettingsButtton: string = '#notification-einstellungen';
    private readonly privateMessagesHint: string = '//p[@class="note svelte-jyz22a"]';
    private readonly createPrivateMessagesButton: string = '//a[@class="create-new-message svelte-jyz22a"]';
    private readonly allPrivateMessagesButton: string = '//a[@class="all-messages svelte-jyz22a"]';
    private readonly addFavorite: string = 'div.favorites-dropdown > div > button';

    constructor(private readonly page: Page) {}
    
    public async clickOnFavoriteClubIcon() {
        // await this.page.locator(this.favoriteClubIcon).click();
        await this.page.getByRole('button', { name: this.favoriteClubIcon }).click();
    }

    public async verifyFavoriteClubOptionsDisplayed() {
        await expect.soft(this.page.getByRole('link', { name: this.overviewButton, exact: true })).toBeVisible();
        await expect.soft(this.page.locator(this.newsButton)).toBeVisible();
        await expect.soft(this.page.getByRole('link', { name: this.scheduleButton, exact: true })).toBeVisible();
        await expect.soft(this.page.locator(this.rumorsButton)).toBeVisible();
        await expect.soft(this.page.locator(this.forumButton)).toBeVisible();
    }

    public async clickOnOverviewForFavoriteClubIcon() {
        await this.page.getByRole('link', { name: this.overviewButton, exact: true }).click();
    }

    public async clickOnNewsForFavoriteClubIcon() {
        // log.info("Click 'Facitity Filter' button");
        await this.page.locator(this.newsButton).click();
    }

    public async clickOnScheduleForFavoriteClubIcon() {
        await this.page.getByRole('link', { name: this.scheduleButton, exact: true }).click();
    }

    public async clickOnRumorsForFavoriteClubIcon() {
        await this.page.locator(this.rumorsButton).click();
    }

    public async clickOnForumForFavoriteClubIcon() {
        await this.page.locator(this.forumButton).click();
    }

    public async clickOnProfileIcon() {
        await this.page.getByRole('button', { name: this.favoriteClubIcon }).click();
        // await this.page.locator(this.profileIcon).click();
    }

    public async verifyDropdownProfileOptionsDisplayed() {
        await expect.soft(this.page.locator(this.profilButton)).toBeVisible();
        await expect.soft(this.page.locator(this.settingsButton)).toBeVisible();
        await expect.soft(this.page.locator(this.logoutButton)).toBeVisible();
    }

    // public async clickOnNotificationsIcon() {
    //     await this.page.locator(this.notificationsIcon).click();
    // }

    public async verifyNotificationIconAndSettingsButtonDisplayed() {
        await expect(this.page.locator(this.notificationsIcon)).toBeVisible();
        await expect(this.page.locator(this.notificationsSettingsIcon)).toBeVisible();
    }

    public async clickOnPrivateMessagesIcon() {
        await this.page.locator(this.privateMessagesIcon).click();
    }

    public async verifyPrivateMessagesHintAndFooterDisplayed() {
        await expect.soft(this.page.locator(this.privateMessagesHint)).toBeVisible();
        await expect.soft(this.page.locator(this.createPrivateMessagesButton)).toBeVisible();
        await expect.soft(this.page.locator(this.allPrivateMessagesButton)).toBeVisible();
    }

    public async clickOnfFavoritesIcon() {
        // log.info("Click 'Facitity Filter' button");
        await this.page.locator(this.favoritesIcon).click();
    }

    public async verifyAddFavoriteDisplayed() {
        await expect(this.page.locator(this.addFavorite)).toBeVisible();
    }
}
