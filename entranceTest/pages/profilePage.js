import BasePage from "./basePage.js";


class ProfilePage extends BasePage {

	constructor() {
		super();
	}

	async cardNumber() {
		return this.currentElement(`//div[@class='page-indicator']`, `Card number`);
	}

}

export default ProfilePage;