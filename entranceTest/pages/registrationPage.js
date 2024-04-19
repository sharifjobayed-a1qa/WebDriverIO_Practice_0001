import BasePage from "./basePage.js";


class RegistrationPage extends BasePage {

	constructor() {
		super();
	}

	async acceptCookies() {
		await (await this.currentElement(`//button[normalize-space()='Not really, no']`)).doClick();
	}
	async enterCredentialsAndPressNext(password, userName, domain) {
		await (await this.currentElement(`//input[@placeholder='Choose Password']`)).clearAndType(password);
		await (await this.currentElement(`//input[@placeholder='Your email']`)).clearAndType(userName);
		await (await this.currentElement(`//input[@placeholder='Domain']`)).clearAndType(domain);
		await (await this.currentElement(`//span[@class='icon icon-chevron-down']`)).doClick();
		await (await this.currentElement(`//*[contains(@class,'dropdown__list')][1]`)).waitUntilElementVisible();
		await (await this.currentElement(`//div[normalize-space()='.com']`)).scrollToPosition();
		await (await this.currentElement(`//div[normalize-space()='.com']`)).doClick();
		await (await this.currentElement(`//span[@class='icon icon-check checkbox__check']`)).doClick();
		await (await this.currentElement(`//a[@class='button--secondary']`)).doClick();
	}
	async hideHelpBox() {
		await (await this.currentElement(`//button[@class='button button--solid button--blue help-form__send-to-bottom-button']`)).doClick();
	}
	async checkHelpBoxVisibility(value) {
		await (await this.currentElement(`//div[@class='help-form__container']`)).waitUntilInvisible(value);
	}
	async firstWarningText() {
		return (await this.currentElement(`//div[normalize-space()='Your password requires at least 10 characters.']`)).elementText();
	}
	async jsTimerStartCount() {
		return (await this.currentElement(`//div[@class='timer timer--white timer--center']`)).elementText();
	}

}

export default RegistrationPage;
