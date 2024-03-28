import {$} from '@wdio/globals';


export class mainPage{

	get addRemoveElementLink(){
		return $(`//*[text()='Add/Remove Elements']`);
	}

	async clickOnAddRemoveElementLink(){
		await this.addRemoveElementLink.click();
	}

}