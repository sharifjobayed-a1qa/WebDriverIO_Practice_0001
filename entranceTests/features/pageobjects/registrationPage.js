

import BasePage from "./basePage.js";


class RegistrationPage extends BasePage {

	constructor (){
		super();
	}

	async confirmRegistrationPage (){
		await this.checkPageTitle(`User Inyerface - A worst-practice UI experiment`);
	}
	async acceptCookies (){
		await (await this.currentElement(`//button[normalize-space()='Not really, no']`, `Cookies accept button`)).doClick();
	}
	async fillPassword (){
		await (await this.currentElement(`//input[@placeholder='Choose Password']`,`Password field`)).clearAndType(`0-Password-0`);
	}
	async fillUsername (){
		await (await this.currentElement(`//input[@placeholder='Your email']`,`Username field`)).clearAndType(`a1qa`);
	}
	async fillEmailDomain (){
		await (await this.currentElement(`//input[@placeholder='Domain']`,`Domain field`)).clearAndType(`nomail`);
	}
	async clickSuffixDropdownArrow (){
		await (await this.currentElement(`//span[@class='icon icon-chevron-down']`,`Suffix dropdown arrow`)).doClick();
	}
	async selectSuffix (){
		await (await this.currentElement(`//*[contains(@class,'dropdown__list')][1]`,`Suffix list`)).waitUntillElementVisible();
		await (await this.currentElement(`//div[normalize-space()='.com']`,`.com suffix`)).scrollToPosition();
		await (await this.currentElement(`//div[normalize-space()='.com']`,`.com suffix`)).doClick();

	}
	async acceptTAndC (){
		await (await this.currentElement(`//span[@class='icon icon-check checkbox__check']`,`Terms & Conditions checkbox`)).doClick();
	}
	async clickNextBtn (){
		await (await this.currentElement(`//a[@class='button--secondary']`,`Next button`)).doClick();
	}
	async submitRegistrationForm (){
		await this.fillPassword();
		await this.fillUsername();
		await this.fillEmailDomain();
		await this.clickSuffixDropdownArrow();
		await this.selectSuffix();
		await this.acceptTAndC();
		await this.clickNextBtn();
	}
	async verifyText(text) {
		await (await this.currentElement(`//div[normalize-space()='Your password requires at least 10 characters.']`, `Form warning`)).matchText(text);
	}
	async verifyTextColor() {
		await (await this.currentElement(`//div[normalize-space()='Your password requires at least 10 characters.']`, `Form warning element`)).matchTextColor(`rgba(41,197,102,1)`);
	}

	
	async hideHelpBox() {
		await (await this.currentElement(`//button[@class='button button--solid button--blue help-form__send-to-bottom-button']`, `HelpBox hide button`)).doClick();
	}
	async checkHelpBoxVisibility() {
		await (await this.currentElement(`//div[contains(@class,'help-form__container')]`, `HelpBox container`)).waitUntilInvisible();
	}

}

export default RegistrationPage;

