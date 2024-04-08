

import BaseElement from "./baseElement.js";
import {expect} from '@wdio/globals';


class BasePage {

	constructor (){}

	async checkPageTitle (value){
		const currentPageTitle = await browser.getTitle();
		await expect(currentPageTitle).toBe(await value);
	}
	async currentElement (locator, name){
		this.locator = await locator;
		this.name = await name;
		return new BaseElement(await this.locator, await this.name);
	}

}

export default BasePage;