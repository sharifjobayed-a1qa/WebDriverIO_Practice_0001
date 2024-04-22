import BaseElement from "./baseElement.js";
import BasePage from "./basePage.js";


class MainPage extends BasePage {

	constructor() {
		super();
		this.hereLink = new BaseElement(`//a[@class='start__link']`, `HERE link`);
	}

	async goToMainPage() {
		await this.goToURL(`https://userinyerface.com/`);
	}
	async clickHERELink() {
		await this.hereLink.doClick();
	}

}

export default MainPage;
