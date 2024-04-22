import BaseElement from "./baseElement.js";

class BasePage {
    constructor() {
        this.commonElement = new BaseElement(`#app`, `Common element`).elLocator();
    }

    async goToURL(url) {
        await browser.url(url);
    }
}

export default BasePage;
