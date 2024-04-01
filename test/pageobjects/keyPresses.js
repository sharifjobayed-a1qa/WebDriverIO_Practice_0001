import Element from "./element.js";

class KeyPresses{
    
	constructor(){
		this.keyPressesField=new Element(`//input[@id='target']`,`The field to type`);
	}

	async focusKeyPressesField(){
		await this.keyPressesField.click();
	}

	async typeText(text) {	
		// Type the desired text
		await this.keyPressesField.clearAndType(await browser.keys(['Backspace']));
	}	

}

export default KeyPresses();
