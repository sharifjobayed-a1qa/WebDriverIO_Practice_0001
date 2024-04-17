import {$, $$} from '@wdio/globals';


class BaseElement {

	constructor(locator, name) {
		this.elLocator = $(locator);
		this.elLocators = $$(locator);
		this.name = name;
		return this;
	}

	async doClick() {
		await (await this.elLocator).click();
	}
	async clearAndType(value) {
		(await this.elLocator).clearValue();
		(await this.elLocator).addValue(value);
	}
	async waitUntillElementVisible() {
		await (await this.elLocator).waitForDisplayed({timeout:15000});
	}
	async scrollToPosition (){
		await (await this.elLocator).scrollIntoView();
	}
	async elementText() {
		await (await this.elLocator).getText();
	}
	async elementExistence() {
		return this.elLocator.isExisting();
	}

}

export default BaseElement;