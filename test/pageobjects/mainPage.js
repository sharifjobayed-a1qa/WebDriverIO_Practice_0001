import Element from "./element.js";

class MainPage {
    constructor() {
        this.linkToHover = new Element(`//*[text()='Hovers']`, `Link to Hover`);
		this.keyPressesLink=new Element(`//*[text()='Key Presses']`,`Link to Key Presses`);
    }

    async hoverOverLink() {
        await this.linkToHover.hover();
    }
	async clickKeyPressesLink(){
		this.keyPressesLink.click();
	}
}

export default MainPage;
