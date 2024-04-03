

import {expect} from '@wdio/globals'
import BasePage from "./basePage.js";


class JSAlertPage extends BasePage{

	constructor () {
		super(`https://the-internet.herokuapp.com/javascript_alerts`);
		this.alertBtn = this.findElement(`//button[@onclick='jsAlert()']`,`Button to Alert dialogue`);
		this.confirmBtn = this.findElement(`//button[@onclick='jsConfirm()']`,`Button to Confirm dialogue`);
		this.promptBtn = this.findElement(`//button[@onclick='jsPrompt()']`,`Button to Prompt`);
		this.actionResult = $(`//p[@id='result']`).getText();
	}

	async handleAlert () {
		await (await this.alertBtn).clickOnIt();
		await browser.acceptAlert();
		await expect(await this.actionResult).toBe(`You successfully clicked an alert`);
	}
	async handleConfirm () {
		await (await this.confirmBtn).clickOnIt();
		await browser.dismissAlert();
		await expect(await this.actionResult).toBe(`You clicked: Cancel`);
	}
	async handlePrompt () {
		await (await this.promptBtn).clickOnIt();
		await browser.sendAlertText(`Hello`);
		await expect(await this.actionResult).toBe(`You entered: Hello`);
	}

}

export default JSAlertPage;