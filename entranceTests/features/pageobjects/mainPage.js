

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
		await this.confirmPage(await this.currentElement(`//a[@class='start__link']`, `HERE link`, `HERE link`));
	}
	async clickOnHERELink (){
		await (await this.currentElement(`//a[@class='start__link']`, `HERE link`)).doClick(); 
	}
	
}

export default MainPage;
