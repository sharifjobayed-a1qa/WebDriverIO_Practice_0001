

import BasePage from "./basePage.js";


class ProfilePage extends BasePage {

	constructor (){
		super();
	}

	async confirmProfilePage (){
		await this.checkPageTitle(`User Inyerface - A worst-practice UI experiment`);
	}
	async selectAny3Interests (){
		await (await this.currentElement(`//*[contains(@class,'checkbox small')]`, `Interests checkboxes`)).clickAll();
		await (await this.currentElement(`//*[contains(@class,'checkbox small')]`, `Interests checkboxes`)).clickAny3();
	}
	async clickOnNextBtn (){
		await (await this.currentElement(`//button[normalize-space()='Next']`,`Next button`)).doClick();
	}
	async verifyText(text) {
		await (await this.currentElement(`//li[normalize-space()='Please upload a picture']`, `Image upload warning`)).matchText(text);
	}
	async verifyTextColor() {
		await (await this.currentElement(`//li[normalize-space()='Please upload a picture']`, `Image upload warning element`)).matchTextColor(`rgba(41,197,102,1)`);
	}

}

export default ProfilePage;