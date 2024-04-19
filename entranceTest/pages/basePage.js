import BaseElement from "./baseElement.js";

class BasePage {
    constructor() {
        this.commonElement = $(`#app`);
    }

    async goToURL(url) {
        await browser.url(url);
    }
    async currentElement(locator) {
		return new BaseElement(locator);
    }
    async currentElements(locator) {
		return await new BaseElement(locator).elLocators();
	}
	
}

export default BasePage;
