import BasePage from "./basePage.js";


class MainPage extends BasePage {

	constructor() {
		super();
	}

	async goToMainPage() {
		await this.goToURL(`https://userinyerface.com/`);
	}
	async clickHERELink() {
		await (await this.currentElement(`//a[@class='start__link']`)).doClick();
	}

}

export default MainPage;
