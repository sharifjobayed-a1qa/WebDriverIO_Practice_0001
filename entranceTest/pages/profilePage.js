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
		const checkBoxesToCheck = checkBoxes.slice(await fromCount, await toCount);
		checkBoxesToCheck.forEach((i) => { i.click(); });
		checkBoxesToCheck.forEach((i) => {
			expect(i).toBeChecked();
		});
	}
	async clickNextBtn() {
		await (await this.currentElement(`//button[normalize-space()='Next']`, `Next button on the profile page`)).doClick();
	}
	async picUploadWarningText() {
		return (await this.currentElement(`//li[normalize-space()='Please upload a picture']`, `Picture upload warning text`)).elementText();
	}	
	async picUploadWarningTextColor() {
		return (await this.currentElement(`//li[normalize-space()='Please upload a picture']`, `Picture upload warning color`)).elementTextColor();
	}
	
}

export default ProfilePage;
