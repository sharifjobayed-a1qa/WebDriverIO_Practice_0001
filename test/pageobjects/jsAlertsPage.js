import BasePage from "./basePage.js";
import {expect} from '@wdio/globals';


class JSAlertsPage extends BasePage{

	constructor () {
		super();
	}

	
	async getAlertActionConfirmation () {
		return await (await this.currentElement(`//p[@id='result']`,`Alert Confirmation element`)).getTextOfIt();
	}

	async clickAlertBtn () {
		await (await this.currentElement(`//button[@onclick='jsAlert()']`,`Alert Button`)).clickOnIt();
	}
	async acceptCurrentAlert () {
		await browser.acceptAlert();
		await expect(await this.getAlertActionConfirmation()).toBe(`You successfully clicked an alert`);
	}

	async clickConfirmBtn () {
		await (await this.currentElement(`//button[@onclick='jsConfirm()']`,`Confirm Dialougue button`)).clickOnIt();
	}
	async denyConfirmDialogue () {
		await browser.dismissAlert();
		await expect(await this.getAlertActionConfirmation()).toBe(`You clicked: Cancel`);
	}

	async clickPromptBtn () {
		await (await this.currentElement(`//button[@onclick='jsPrompt()']`,`Prompt button`)).clickOnIt();
	}
	async typeAndAcceptPrompt () {
		await browser.sendAlertText(`Hello`);
		await browser.acceptAlert();
		await expect(await this.getAlertActionConfirmation()).toBe(`You entered: Hello`);
	}

}

export default JSAlertsPage;