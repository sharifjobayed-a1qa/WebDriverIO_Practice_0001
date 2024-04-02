import Element from "./element.js";


class KeyPresses{
    
	constructor(){
		this.keyPressesField=new Element(`//input[@id='target']`,`The field to type`);
	}

	async focusKeyPressesField(){
		await this.keyPressesField.click();
	}

	async typeText(arg) {
		await this.keyPressesField.clearAndType(arg);
	}	

}

export default KeyPresses;
