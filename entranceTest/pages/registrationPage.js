import BasePage from "./basePage.js";


class RegistrationPage extends BasePage {

	constructor() {
		super();
	}

	async acceptCookies() {
		await (await this.currentElement(`//button[normalize-space()='Not really, no']`, `Cookies accept button`)).doClick();
	}
	async enterPassword() {
		await (await this.currentElement(`//input[@placeholder='Choose Password']`, `Password field`)).clearAndType(`0-Password-0`);
	}
	async enterCredentialsAndPressNext() {
		await (await this.currentElement(`//input[@placeholder='Your email']`, `Email field`)).clearAndType(`somebody`);
		await (await this.currentElement(`//input[@placeholder='Domain']`, `Domain field`)).clearAndType(`yopmail`);
		await (await this.currentElement(`//span[@class='icon icon-chevron-down']`, `Suffix dropdown arrow`)).doClick();
		await (await this.currentElement(`//*[contains(@class,'dropdown__list')][1]`,`Suffix list`)).waitUntillElementVisible();
		await (await this.currentElement(`//div[normalize-space()='.com']`,`.com suffix`)).scrollToPosition();
		await (await this.currentElement(`//div[normalize-space()='.com']`,`.com suffix`)).doClick();
		await (await this.currentElement(`//span[@class='icon icon-check checkbox__check']`,`Terms & Conditions checkbox`)).doClick();
		await (await this.currentElement(`//a[@class='button--secondary']`,`Next button`)).doClick();
	}

}

export default RegistrationPage;