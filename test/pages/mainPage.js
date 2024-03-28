import {$,expect} from '@wdio/globals';


class mainPage{

	get getPageHeader(){
		return $(`//*[text()='Welcome to the-internet']`);
	}

	

}

export default mainPage();
