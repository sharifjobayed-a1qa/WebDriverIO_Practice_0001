
import {$} from '@wdio/globals';


class MainPage{

	get addRemoveElsLink(){
		return $(`//*[text()='Add/Remove Elements']`);
	}

	async clickAddRemoveElsLink(){
		(await this.addRemoveElsLink).click();
	}

	

}

export default new MainPage();