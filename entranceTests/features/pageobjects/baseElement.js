

class BaseElement {

	constructor (locator, locators, name){
		this.locator = $(locator);
		this.locators = $$(locators);
		this.name = name;
	}

	async doClick (){
		await (await this.locator).click();
	}
	async clearAndType (value){
		await (await this.locator).clearValue();
		await (await this.locator).addValue(value);
	}
	async hoverOnIt (){
		await (await this.locator).moveTo();
	}

}

export default BaseElement;