import BasePage from "./basePage.js";
// import {Keys} from '@wdio';


class KeyPressesPage extends BasePage{

	constructor () {
		super();
	}

	async clickOnInputField () {
		(await this.currentElement(`//input[@id='target']`,`Input field`)).clickOnIt();
	}
	// async pressBackspaceKey () {
	// 	await browser.keys(Keys.BACK_SPACE);
	// } 

}

export default KeyPressesPage;