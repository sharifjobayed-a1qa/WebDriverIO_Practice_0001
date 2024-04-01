

class BaseElement{

	constructor(elementLocator,elementName){
		this.elLocator=elementLocator;
		this.elName=elementName;
	}

	async clickElement(){
		await $(await this.elLocator).click();
	}
	async clearNType(value){
		await $(await this.elLocator).clearValue();
		await $(await this.elLocator).setValue(value);
	}
	async hoverOn(){
		await (await this.elLocator).moveTo();
	}	

}

export default new BaseElement();