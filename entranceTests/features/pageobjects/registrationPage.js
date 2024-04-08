

import BasePage from "./basePage.js";
import BaseElement from "./baseElement.js";


class RegistrationPage extends BasePage {

	constructor (){
		super();
	}

	async confirmRegistrationPage (){
		await this.checkPageTitle(`User Inyerface - A worst-practice UI experiment`);
	}
	async acceptCookies (){
		await new BaseElement(`//button[normalize-space()='Not really, no']`, `Cookies accept button`).doClick();
	}
	async fillPassword (){
		await new BaseElement(`//input[@placeholder='Choose Password']`,`Password field`).clearAndType(`0-Password-0`);
	}
	async fillUsername (){
		await new BaseElement(`//input[@placeholder='Your email']`,`Username field`).clearAndType(`a1qa`);
	}
	async fillEmailDomain (){
		await new BaseElement(`//input[@placeholder='Domain']`,`Domain field`).clearAndType(`nomail`);
	}
	async clickSuffixDropdownArrow (){
		await new BaseElement(`//span[@class='icon icon-chevron-down']`,`Suffix dropdown arrow`).doClick();
	}
	async selectSuffix (){
		await new BaseElement(`//*[contains(@class,'dropdown__list')][1]`,`Suffix list`).waitUntillElementVisible();
		await new BaseElement(`//div[normalize-space()='.com']`,`.com suffix`).scrollToPosition();
		await new BaseElement(`//div[normalize-space()='.com']`,`.com suffix`).doClick();

	}
	async acceptTAndC (){
		await new BaseElement(`//span[@class='icon icon-check checkbox__check']`,`Terms & Conditions checkbox`).doClick();
	}
	async clickNextBtn (){
		await new BaseElement(`//a[@class='button--secondary']`,`Next button`).doClick();
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

}

export default RegistrationPage;

