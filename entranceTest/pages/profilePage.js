import BasePage from "./basePage.js";


class ProfilePage extends BasePage {

	constructor() {
		super();
	}

	async cardNumber() {
		return this.currentElement(`//div[@class='page-indicator']`)
	}
	async clickNumbersOfInterests(interests) {
    const checkBoxes = await this.currentElements(`//*[contains(@class,'icon icon-check checkbox__check')]`);
    await (await this.currentElement(`//label[@for='interest_unselectall']//span[@class='checkbox__box']`)).doClick();
    for(let i = 0; i < interests; i++) {
        const randNum = Math.floor(Math.random() * checkBoxes.length);
        if (checkBoxes[randNum] && typeof checkBoxes[randNum].isSelected === 'function') {
            if(await checkBoxes[randNum].isSelected()){
                checkBoxes[randNum + 1].click();
                expect(checkBoxes[randNum + 1]).toBeSelected();
            } else {
                checkBoxes[randNum].click();
                expect(checkBoxes[randNum]).toBeSelected();
            }
        }
    }
	}
	async clickNextBtn() {
		await (await this.currentElement(`//button[normalize-space()='Next']`)).doClick();
	}
	async picUploadWarningText() {
		return (await this.currentElement(`//li[normalize-space()='Please upload a picture']`)).elementText();
	}	
	async picUploadWarningTextColor() {
		return (await this.currentElement(`//li[normalize-space()='Please upload a picture']`)).elementTextColor();
	}
	
}

export default ProfilePage;
