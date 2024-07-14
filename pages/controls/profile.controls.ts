import { Page, expect } from '@playwright/test';
// import log from '../../utils/logger/logger.js';

export class ProfileIcons {
    // private readonly globalSearch: string = 'xpath=//input[@class="tm-header__input--search-field"]';
    // private readonly favoriteClubIcon: string = '//button[@title="My club"]';
    private readonly favoriteClubIcon: string = 'club icon';
    // private readonly profileIcon: string = '//button[@title="Mein Profil"]';
    private readonly profileIcon: string = 'user icon';
    // private readonly notificationsIcon: string = '.notifications';
    private readonly notificationsIcon: string = 'notifications Notifications';
    private readonly notificationsSettingsIcon: string = 'settings Settings';
    private readonly privateMessagesIcon: string = '.private-messages';
    private readonly favoritesIcon: string = 'My favourites';
    private readonly overviewButton: string = 'overview';
    // private readonly news: string = 'News';
    private readonly news: string = 'News';
    private readonly checkAllNewsButton: string = 'Check all news';
    private readonly scheduleButton: string = 'Schedule';
    // private readonly rumorsButton: string = '#geruechte';
    private readonly forumButton: string = 'forum';
    private readonly profilButton: string = '#profil';
    // private readonly settingsButton: string = '#einstellungen';
    private readonly groundhoppingFromProfileNavButton: string = 'Groundhopping Tool';
    private readonly myDreamTeamFromProfileNavButton: string = 'My dream team';
    private readonly playersWatchlistFromProfileNavButton: string = 'Players Watchlist';
    private readonly playerRatingsFromProfileNavButton: string = 'Player Ratings';
    private readonly applyAsScoutFromProfileNavButton: string = 'Apply as a moderator or';
    private readonly logoutButton: string = 'logout Log out';
    // private readonly notificationSettingsButtton: string = '#notification-einstellungen';
    private readonly privateMessagesHint: string = 'Private messages older than 1 year will be deleted from time to time (except for data scouts and moderators)';
    private readonly createPrivateMessagesButton: string = 'Create a new message';
    private readonly allPrivateMessagesButton: string = 'Show all messages';
    private readonly addFavorite: string = 'Add favourite';

    constructor(private readonly page: Page) {}
    
    public async clickOnFavoriteClubIcon() {
        // await this.page.locator(this.favoriteClubIcon).click();
        await this.page.getByRole('button', { name: this.favoriteClubIcon }).click();
    }

    public async verifyFavoriteClubOptionsDisplayed() {
        await expect.soft(this.page.getByRole('link', { name: this.overviewButton, exact: true })).toBeVisible();
        await expect.soft(this.page.getByRole('heading', { name: this.news, exact: true })).toBeVisible();
        // await expect.soft(this.page.getByText(this.checkAllNewsButton)).toBeVisible();
        await expect.soft(this.page.getByLabel(this.checkAllNewsButton)).toBeVisible();
        await expect.soft(this.page.getByRole('link', { name: this.scheduleButton, exact: true })).toBeVisible();
        // await expect.soft(this.page.locator(this.rumorsButton)).toBeVisible();
        await expect.soft(this.page.getByText(this.forumButton)).toBeVisible();
    }

    public async clickOnOverviewForFavoriteClubIcon() {
        await this.page.getByRole('link', { name: this.overviewButton, exact: true }).click();
    }

    public async clickOnNewsForFavoriteClubIcon() {
        // log.info("Click 'Facitity Filter' button");
        await this.page.locator(this.checkAllNewsButton).click();
    }

    public async clickOnScheduleForFavoriteClubIcon() {
        await this.page.getByRole('link', { name: this.scheduleButton, exact: true }).click();
    }

    // public async clickOnRumorsForFavoriteClubIcon() {
    //     await this.page.locator(this.rumorsButton).click();
    // }

    public async clickOnForumForFavoriteClubIcon() {
        await this.page.locator(this.forumButton).click();
    }

    public async clickOnProfileIcon() {
        await this.page.getByRole('button', { name: this.profileIcon }).click();
        // await this.page.locator(this.profileIcon).click();
    }

    public async verifyDropdownProfileOptionsDisplayed() {
        await expect.soft(this.page.locator(this.profilButton)).toBeVisible();
        await expect.soft(this.page.getByLabel(this.groundhoppingFromProfileNavButton)).toBeVisible();
        await expect.soft(this.page.getByLabel(this.myDreamTeamFromProfileNavButton)).toBeVisible();
        await expect.soft(this.page.getByLabel(this.playersWatchlistFromProfileNavButton)).toBeVisible();
        await expect.soft(this.page.getByLabel(this.playerRatingsFromProfileNavButton)).toBeVisible();
        await expect.soft(this.page.getByLabel(this.applyAsScoutFromProfileNavButton)).toBeVisible();
        await expect.soft(this.page.getByRole('button', { name: this.logoutButton })).toBeVisible();
    }

    // public async clickOnNotificationsIcon() {
    //     await this.page.locator(this.notificationsIcon).click();
    // }

    public async verifyNotificationIconAndSettingsButtonDisplayed() {
        await expect(this.page.getByRole('heading', { name: this.notificationsIcon })).toBeVisible();
        await expect(this.page.getByRole('link', { name: this.notificationsSettingsIcon })).toBeVisible();
    }

    // public async clickOnPrivateMessagesIcon() {
    //     await this.page.locator(this.privateMessagesIcon).click();
    // }

    public async verifyPrivateMessagesHintAndFooterDisplayed() {
        await expect.soft(this.page.getByText(this.privateMessagesHint)).toBeVisible();
        await expect.soft(this.page.getByRole('link', { name: this.createPrivateMessagesButton })).toBeVisible();
        await expect.soft(this.page.getByRole('link', { name: this.allPrivateMessagesButton })).toBeVisible();
    }

    public async clickOnfFavoritesIcon() {
        // log.info("Click 'Facitity Filter' button");
        await this.page.getByRole('button', { name: this.favoritesIcon }).click();
    }

    public async verifyAddFavoriteDisplayed() {
        await expect(this.page.getByRole('button', { name: this.addFavorite })).toBeVisible();
    }
}
