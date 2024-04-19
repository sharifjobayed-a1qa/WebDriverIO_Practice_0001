import {$, $$} from '@wdio/globals';


class BaseElement {

	constructor(locator, name) {
		this.locator = locator;
		this.name = name;
		return this;
	}

	get elLocator() {
		return $(this.locator);
	}
	get elLocators() {
		return $$(this.locator);
	}

	async doClick() {
		await this.elLocator.click();
	}
	async clearAndType(value) {
		await this.elLocator.clearValue();
		await this.elLocator.addValue(value);
	}
	async waitUntillElementVisible() {
		await this.elLocator.waitForDisplayed({timeout:15000});
	}
	async scrollToPosition (){
		await this.elLocator.scrollIntoView();
	}
	async elementText() {
		return this.elLocator.getText();
	}
	async elementExistence() {
		return this.elLocator.isExisting();
	}
	async elementTextColor (){
		return await this.elLocator.getCSSProperty('color').then(p => p.value);
	}
	async waitUntilInvisible(ms) {
		browser.waitUntil(() => {
			return !this.elLocator.isDisplayed();
		}, {
			timeout: ms,
			timeoutMsg: 'Element did not disappear within 15 seconds',
			interval: 500,
		});
		
	}

}

export default BaseElement;
