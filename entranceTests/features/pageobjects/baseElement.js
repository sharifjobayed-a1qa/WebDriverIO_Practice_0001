

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

}

export default BaseElement;