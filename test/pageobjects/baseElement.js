

class BaseElement{

	constructor (locator, title) {
		this.locator = locator;
		this.title = title;
	}

	get elLocator () {
		return $(this.locator);
	}
	get elLocators () {
		return $$(this.locator);
	}
	async clickOnIt () {
		await (await this.elLocator()).click();
	}
	async clearAndType () {
		await this.elLocator.clearValue();
		await this.elLocator.addValue();
	}
	async hoverOverIt () {
		await this.elLocator.moveTo();
	}
	async getTextOfIt () {
		await this.elLocator.getText();
	}

}

export default BaseElement;