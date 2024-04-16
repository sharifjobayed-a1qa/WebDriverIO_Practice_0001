import BaseElement from "./baseElement.js";


class BasePage extends BaseElement {

	constructor() {
		super();
	}

	async confirmPage(element) {
		await expect(element).toBeExisting();
	}
	async currentElement(locator, name) {
		return new BaseElement(await locator, undefined, await name);
	}
	async currentElements(locators, name) {
		return new BaseElement(undefined, await locators, await name);
	}

}

export default BasePage;