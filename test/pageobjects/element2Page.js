

import {expect} from '@wdio/globals';


class Element2Page{

	get startBtn(){
		return $(`//*[text()='Start']`);
	}

	async clickStartBtn(){
		await this.startBtn.click();
	}

	get helloWorldEl(){
		return $(`//*[text()='Hello World!']`);
	}

	async waitforHelloWorld(){
		(await this.helloWorldEl).waitForDisplayed({timeout:5000});
		await expect(this.helloWorldEl).toBe(true);
	}

}

export default new Element2Page();