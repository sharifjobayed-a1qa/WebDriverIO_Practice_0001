

// import BaseElement from "./baseElement.js";
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
		const hereLink = await this.currentElement(`.start__link`, `HERE link`);
		await hereLink.doClick();
	}
	
}

export default MainPage;
