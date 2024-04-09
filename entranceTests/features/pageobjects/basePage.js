

import BaseElement from "./baseElement.js";
import {expect} from '@wdio/globals';


class BasePage {

	constructor (){}

	async checkPageTitle(value) {
		const currentPageTitle = await browser.getTitle();
		await expect(currentPageTitle).toBe(await value);
	}
	async confirmPage(element) {
		await element.confirmElement();
	}
	async currentElement(locator, name) {
		return new BaseElement(await locator, await name);
	}

}

export default BasePage;