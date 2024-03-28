

import {$} from '@wdio/globals';


export class mainPage{

	get addRemoveElementsLink(){
		return $(`//*[text()='Add/Remove Elements']`);
	}

	async clickAddRemoveElementsBtn(){
		(await this.addRemoveElementsLink).click();
	}

}