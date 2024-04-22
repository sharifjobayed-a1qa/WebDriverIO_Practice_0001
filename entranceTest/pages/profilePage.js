import BaseElement from "./baseElement.js";
import BasePage from "./basePage.js";


class ProfilePage extends BasePage {

	constructor() {
		super();
		this.cardNumber = new BasePage(`//div[@class='page-indicator']`, `Card number element`);
		this.interestCheckboxes = new BaseElement(`//*[contains(@class,'icon icon-check checkbox__check')]`, `Interest checkboxes`).elLocators();
		this.unselectAllCheckbox = new BaseElement(`//label[@for='interest_unselectall']//span[@class='checkbox__box']`, `Unselect all checkbox`);
		this.nextBtn = new BaseElement(`//button[normalize-space()='Next']`, `Next button`);
		this.picUploadWarning = new BaseElement(`//li[normalize-space()='Please upload a picture']`, `Pic upload warning`);		
	}

	async clickNumbersOfInterests(interests) {
    await this.unselectAllCheckbox.doClick();
    for(let i = 0; i < interests; i++) {
        const randNum = Math.floor(Math.random() * this.interestCheckboxes.length);
        if (this.interestCheckboxes[randNum] && typeof this.interestCheckboxes[randNum].isSelected === 'function') {
            if(await this.interestCheckboxes[randNum].isSelected()){
                this.interestCheckboxes[randNum + 1].click();
                expect(this.interestCheckboxes[randNum + 1]).toBeSelected();
            } else {
                this.interestCheckboxes[randNum].click();
                expect(this.interestCheckboxes[randNum]).toBeSelected();
            }
        }
    }
	}
	async clickNextBtn() {
		await this.nextBtn.doClick();
	}
	async picUploadWarningText() {
		return this.picUploadWarning.elementText();
	}	
	async picUploadWarningTextColor() {
		return await this.picUploadWarning.elementTextColor();
	}
	
}

export default ProfilePage;
