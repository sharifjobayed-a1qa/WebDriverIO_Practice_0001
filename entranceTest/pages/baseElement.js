import {$, $$} from '@wdio/globals';


class BaseElement {

	constructor(locator) {
		this.locator = locator;
	}

	async elLocator() {
		const element = await $(this.locator);
		return element;
	}
	async elLocators() {
		const element = await $$(this.locator);
		return element;
	}

	async doClick() {
		await (await this.elLocator()).click();
	}
	async clearAndType(value) {
		await (await this.elLocator()).clearValue();
		await (await this.elLocator()).addValue(value);
	}
	async waitUntillElementVisible() {
		await (await this.elLocator()).waitForDisplayed({timeout:15000});
	}
	async scrollToPosition (){
		await (await this.elLocator()).scrollIntoView();
	}
	async elementText() {
		return (await this.elLocator()).getText();
	}
	async elementExistence() {
		return (await this.elLocator()).isExisting();
	}
	async elementTextColor (){
		return (await this.elLocator()).getCSSProperty('color').then(p => p.value);
	}
	async waitUntilInvisible(ms) {
		browser.waitUntil(() => {
			return !this.elLocator().then(p=>{if(!p) return true})
		}, {
			timeout: ms,
			timeoutMsg: 'Element did not disappear within 15 seconds',
			interval: 500,
		});
		
	}

}

export default BaseElement;
