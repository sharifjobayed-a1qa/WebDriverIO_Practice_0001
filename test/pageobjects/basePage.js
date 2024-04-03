import BaseElement from "./baseElement.js";


class BasePage extends BaseElement{

	constructor (url) {
		super();
		this.url = url;
	}

	async currentPageURL () {
		this.url = await browser.getUrl();
		return this.url;
	}
	async currentElement (locator, title) {
		return new BaseElement(locator, title);
	}

}

export default BasePage;