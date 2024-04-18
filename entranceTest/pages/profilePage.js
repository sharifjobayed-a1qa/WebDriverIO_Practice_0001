import BasePage from "./basePage.js";


class ProfilePage extends BasePage {

	constructor() {
		super();
	}

	async cardNumber() {
		return this.currentElement(`//div[@class='page-indicator']`, `Card number`);
	}
	async click3Interests(fromCount, toCount) {
		const checkBoxes = await $$(`//*[contains(@class,'icon icon-check checkbox__check')]`);
		await checkBoxes.forEach((i) => {i.click()});
		const checkBoxesToCheck = checkBoxes.slice(fromCount, toCount);
		checkBoxesToCheck.forEach((i) => {i.click(); });
		checkBoxesToCheck.forEach((i) => {
			expect(i).toBeChecked();
		});
	}
	
}

export default ProfilePage;