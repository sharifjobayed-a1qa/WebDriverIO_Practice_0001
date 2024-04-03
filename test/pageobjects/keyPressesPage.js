

import BasePage from "./basePage.js";


class KeyPressesPage extends BasePage{

	constructor () {
		super(`https://the-internet.herokuapp.com/key_presses`);
	}

	async clickOnTextField () {
		await (await this.findElement(`//input[@id='target']`,`Text field`)).clickOnIt();
	}
	async pressKeyInTextField () {
		await (await this.findElement(`//input[@id='target']`,`Text field`)).keys(keys.BACK_SPACE);
	}

}

export default KeyPressesPage;