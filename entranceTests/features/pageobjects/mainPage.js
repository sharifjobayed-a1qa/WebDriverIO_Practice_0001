

import BasePage from "./basePage.js";


class MainPage extends BasePage {

	constructor (){
		super();
		this.url = `https://userinyerface.com`;
	}

	async goToTargetURL (){
		await browser.url(this.url);
	}
	async confirmMainPage (){
		await this.checkPageTitle(`User Inyerface - A worst-practice UI experiment`);
	}
	async clickOnHERELink (){
		await (await this.currentElement(`//a[@class='start__link']`, `HERE link`)).doClick(); 
	}
	
}

export default MainPage;
