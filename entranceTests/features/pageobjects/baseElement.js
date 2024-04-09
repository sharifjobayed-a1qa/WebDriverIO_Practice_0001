

class BaseElement {

	constructor (locator, name){
		this.locator = locator;
		this.name = name;
	}

	get elLocator (){
		return $(this.locator);
	}
	get elLocators (){
		return $$(this.locator);
	}
	async elText() {
		return (await this.elLocator).getText();
	}
	async confirmElement() {
		await expect(this.elLocator).toBeDisplayed();
	}
	async doClick (){
		await (await this.elLocator).click();
	}
	async clearAndType (value){
		await (await this.elLocator).clearValue();
		await (await this.elLocator).addValue(value);
	}
	async hoverOnIt (){
		await (await this.elLocator).moveTo();
	}
	async scrollToPosition (){
		await (await this.elLocator).scrollIntoView();
	}
	async matchTextColor (value){
		const elColor = (await this.elLocator.getCSSProperty(`color`)).value;
		await expect(elColor).toEqual(value);
	}
	async waitUntillElementVisible (){
		await (await this.elLocator).waitForDisplayed({timeout:30000});
		await expect(this.elLocator).toBeDisplayed();
	}
	async waitUntilInvisible() {
		browser.waitUntil(() => {
			return !this.elLocator.isDisplayed();
		}, {
			timeout: 15000,
			timeoutMsg: 'Element did not disappear within 15 seconds',
			interval: 500
		});
		
	}

	async clickAll (){
		this.elLocators.forEach(i => i.click());
	}
	async clickAny3 (){
		const i1 = Math.round(Math.random() * this.elLocators.length);
		const i2 = Math.round(Math.random() * this.elLocators.length);
		const i3 = Math.round(Math.random() * this.elLocators.length);
		this.elLocators.forEach(i => {
			if (i == i1 && i == i2 && i == i3){
				i.click();
			}
		});
	}
	async getSingleItemsText(index) {
		return this.elLocators[index].getText();
	}

}

export default BaseElement;