import BasePage from "./basePage.js";


class ProfilePage extends BasePage {

	constructor() {
		super();
	}

	async cardNumber() {
		return this.currentElement(`//div[@class='page-indicator']`, `Card number`);
	}
	async clickNumbersOfInterests(interests) {
		const checkBoxes = await $$(`//*[contains(@class,'icon icon-check checkbox__check')]`);
		await (await this.currentElement(`//label[@for='interest_unselectall']//span[@class='checkbox__box']`, `Deselect all checkbox`)).doClick();
		for(let i = 0; i <= interests; i++) {
			const randNum = Math.round(Math.random() * interests);
			if(await checkBoxes[randNum].isSelected()){
				checkBoxes[randNum + 1].click();
				expect(checkBoxes[randNum + 1]).toBeSelected();
			} else {
				checkBoxes[randNum].click();
				expect(checkBoxes[randNum]).toBeSelected();
			}
		}
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
