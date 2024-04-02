import Element from "./element.js";

class MainPage{
    constructor() {
        this.linkToHover=new Element(`//*[text()='Hovers']`, `Link to Hover`);
		this.keyPressesLink=new Element(`//*[text()='Key Presses']`,`Link to Key Presses`);
		this.jsAlertsLink=new Element(`//*[text()='JavaScript Alerts']`,`JavaScript Alerts page link`);
    }

    async hoverOverLink() {
        await this.linkToHover.hover();
    }
	async clickKeyPressesLink(){
		await this.keyPressesLink.click();
	}
	async clickJSAlertLink(){
		await this.jsAlertsLink.click();
	}
}

export default MainPage;
