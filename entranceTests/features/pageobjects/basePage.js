

import BaseElement from "./baseElement.js";
import {expect} from '@wdio/globals';


class BasePage extends BaseElement {

	constructor (){
		super();
	}

	async checkPageTitle (value){
		const currentPageTitle = await browser.getTitle();
		await expect(currentPageTitle).toBe(await value);
	}
	async currentElement (locator, name){
		this.locator = await locator;
		this.name = await name;
		return new BaseElement(await this.locator, undefined, await this.name);
	}
	async currentElements (locators, name){
		this.locators = await locators;
		this.name = await name;
		return new BaseElement(undefined, await this.locators, await this.name);
	}

}

export default BasePage;