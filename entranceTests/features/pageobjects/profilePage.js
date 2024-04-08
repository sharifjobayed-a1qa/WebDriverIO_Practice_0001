

import BasePage from "./basePage.js";


class ProfilePage extends BasePage {

	constructor (){
		super();
	}

	async selectAny3Interests (){
		await (await this.currentElement(`//*[contains(@class,'checkbox small')]`, `Interests checkboxes`)).clickAll();
		await (await this.currentElement(`//*[contains(@class,'checkbox small')]`, `Interests checkboxes`)).clickAny3();
	}

}

export default ProfilePage;