

import BasePage from "./basePage.js";


class ProfilePage extends BasePage {

	constructor (){
		super();
	}

	async confirmProfilePage (){
		await this.checkPageTitle(`User Inyerface - A worst-practice UI experiment`);
	}
	async selectAny3Interests (){
		await (await this.currentElement(`//*[contains(@class,'checkbox small')]`, `Interests checkboxes`)).clickAll();
		await (await this.currentElement(`//*[contains(@class,'checkbox small')]`, `Interests checkboxes`)).clickAny3();
	}
	async uploadImage (){
		await (await this.currentElement(`//a[@class='avatar-and-interests__upload-button']`, `Image upload button`)).clearAndType(`./resources/Max_Payne_2.jpg`);
	}

}

export default ProfilePage;