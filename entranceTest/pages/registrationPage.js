import BasePage from "./basePage.js";


class RegistrationPage extends BasePage {

	constructor() {
		super();
	}

	async acceptCookies() {
		await (await this.currentElement(`//button[normalize-space()='Not really, no']`, `Cookies accept button`)).doClick();
	}
	async enterCredentialsAndPressNext(password, userName, domain) {
		await (await this.currentElement(`//input[@placeholder='Choose Password']`, `Password field`)).clearAndType(password);
		await (await this.currentElement(`//input[@placeholder='Your email']`, `Email field`)).clearAndType(userName);
		await (await this.currentElement(`//input[@placeholder='Domain']`, `Domain field`)).clearAndType(domain);
		await (await this.currentElement(`//span[@class='icon icon-chevron-down']`, `Suffix dropdown arrow`)).doClick();
		await (await this.currentElement(`//*[contains(@class,'dropdown__list')][1]`, `Suffix list`)).waitUntillElementVisible();
		await (await this.currentElement(`//div[normalize-space()='.com']`, `.com suffix`)).scrollToPosition();
		await (await this.currentElement(`//div[normalize-space()='.com']`, `.com suffix`)).doClick();
		await (await this.currentElement(`//span[@class='icon icon-check checkbox__check']`, `Terms & Conditions checkbox`)).doClick();
		await (await this.currentElement(`//a[@class='button--secondary']`, `Next button on the registration page`)).doClick();
	}
	async hideHelpBox() {
		await (await this.currentElement(`//button[@class='button button--solid button--blue help-form__send-to-bottom-button']`, `HelpBox hide button`)).doClick();
	}
	async checkHelpBoxVisibility(value) {
		await (await this.currentElement(`//div[@class='help-form__container']`, `HelpBox container`)).waitUntilInvisible(value);
	}
	async firstWarningText() {
		return (await this.currentElement(`//div[normalize-space()='Your password requires at least 10 characters.']`, `First form warning`)).elementText();
	}

}

export default RegistrationPage;
