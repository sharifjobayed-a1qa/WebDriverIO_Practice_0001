import BasePage from './basePage.js';
import {Keys} from '@wdio';


class KeyPressesPage extends BasePage{

	constructor () {
		super();
	}

	async clickOnInputField () {
		await (await this.currentElement(`//input[@id='target']`,`Input field`)).clickOnIt();
	}
	async pressBackspaceKey () {
		await (await this.currentElement(`//input[@id='target']`,`Input field`)).keys(await Keys.BACK_SPACE);
	}

}

export default KeyPressesPage;