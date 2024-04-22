import BaseElement from "./baseElement.js";
import BasePage from "./basePage.js";


class RegistrationPage extends BasePage {

	constructor() {
		super();
		this.acceptCookiesBtn = new BaseElement(`//button[normalize-space()='Not really, no']`, `Accept cookies button`);
		this.passwordField = new BaseElement(`//input[@placeholder='Choose Password']`, `Password field`);
		this.userNameField = new BaseElement(`//input[@placeholder='Your email']`, `Username field`);
		this.domainField = new BaseElement(`//input[@placeholder='Domain']`, `Domain field`);
		this.suffixDropdownArrow = new BaseElement(`//span[@class='icon icon-chevron-down']`, `Suffix dropdown arrow`);
		this.suffixList = new BaseElement(`//*[contains(@class,'dropdown__list')][1]`, `Suffix list`);
		this.dotComSuffix = new BaseElement(`//div[normalize-space()='.com']`, `Dot com suffix`);
		this.tNCCheckbox = new BaseElement(`//span[@class='icon icon-check checkbox__check']`, `Terms of conditions checkbox`);
		this.nextBtn = new BaseElement(`//a[@class='button--secondary']`, `Next button`);
		this.helpBoxMinimizeArrow = new BaseElement(`//button[@class='button button--solid button--blue help-form__send-to-bottom-button']`, `Help box minimize arrow`);
		this.formContainer = new BaseElement(`//div[@class='help-form__container']`, `Form container`);
		this.formWarning = new BaseElement(`//div[normalize-space()='Your password requires at least 10 characters.']`, `Form warning text`);
		this.jsCounter = new BaseElement(`//div[@class='timer timer--white timer--center']`, `JS counter`);
	}

	async acceptCookies() {
		await this.acceptCookiesBtn.doClick();
	}
	async enterCredentialsAndPressNext(password, userName, domain) {
		await this.passwordField.clearAndType(password);
		await this.userNameField.clearAndType(userName);
		await this.domainField.clearAndType(domain);
		await this.suffixDropdownArrow.doClick();
		await this.suffixList.waitUntilElementVisible();
		await this.dotComSuffix.scrollToPosition();
		await this.dotComSuffix.doClick();
		await this.tNCCheckbox.doClick();
		await this.nextBtn.doClick();
	}
	async hideHelpBox() {
		await this.helpBoxMinimizeArrow.doClick();
	}
	async checkHelpBoxVisibility(value) {
		await this.formContainer.waitUntilInvisible(value);
	}
	async firstWarningText() {
		return this.formWarning.elementText();
	}
	async jsTimerStartCount() {
		return this.jsCounter.elementText();
	}

}

export default RegistrationPage;
