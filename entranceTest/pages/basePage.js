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
        return $$(locator).map(element => new BaseElement(element));
    }
}

export default BasePage;
