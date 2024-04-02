import Element from "./element.js";

class JSAlertPage{

	constructor(){
		this.jsAlertBtn=new Element(`//*[text()='Click for JS Alert']`,`JS Alert Button`);
		this.jsConfirmBtn=new Element(`//*[text()='Click for JS Confirm']`,`JS Confirm Button`);
		this.jsPromptBtn=new Element(`//*[text()='Click for JS Prompt']`,`JS Prompt Button`);
	}

	async clickJSAlertBtn(){
		await this.jsAlertBtn.click();
	}
	async closeJSAlert(){
		await browser.acceptAlert();
	}

	async clickJSConfirmBtn(){
		await this.jsConfirmBtn.click();
	}
	async denyJSConfirm(){
		await browser.dismissAlert();
	}

}

export default JSAlertPage;