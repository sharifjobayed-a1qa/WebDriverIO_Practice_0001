import {Then} from "@wdio/cucumber-framework";
import MainPage from "../pages/mainPage.js";
import {assert, expect, should} from 'chai';
import RegistrationPage from "../pages/registrationPage.js";


let mainPage, registrationPage;

Then(`I Validate that timer starts from {string}`, async(string) => {
	mainPage = new MainPage();
	(await mainPage.commonElement).isExisting();
	await mainPage.clickHERELink();
	registrationPage = new RegistrationPage();
	expect(await registrationPage.jsTimerStartCount()).to.equal(string);
});
