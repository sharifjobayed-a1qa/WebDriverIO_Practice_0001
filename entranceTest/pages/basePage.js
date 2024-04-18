import BaseElement from "./baseElement.js";


class BasePage {

	constructor() {
		this.commonElement = $(`#app`);
	}

	async goToURL(url) {
		await browser.url(url);
	}
	async currentElement(locator, name) {
		return new BaseElement(locator, name);
	}

}

export default BasePage;
