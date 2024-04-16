import {$, $$} from '@wdio/globals';


class BaseElement {

	constructor(locator, locators, name) {
		this.locator = $(locator);
		this.locators = $$(locators);
		this.name = name;
		return this;
	}

	async doClick() {
		await (await this.locator).click();
	}
	async elementText() {
		await (await this.locator).getText();
	}
	async clearAndType() {
		await (await this.locator).clearValue();
		await (await this.locator).addValue();
	}

}

export default BaseElement;