

import BaseElement from "./baseElement";
import BasePage from "./basePage.js";


class ProfilePage extends BasePage {

	constructor (){
		super();
	}

	async selectAny3Interests (){
		const interestsList = this.currentElement(`//*[contains(@class,'checkbox small')]`, `Interest list checkboxes`);
	}

}

export default ProfilePage;