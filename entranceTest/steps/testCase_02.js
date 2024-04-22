import { Then, When } from "@wdio/cucumber-framework";
import {assert, expect, should} from 'chai';
import MainPage from "../pages/mainPage.js";
import RegistrationPage from "../pages/registrationPage.js";


let mainPage, registrationPage;

When(`I hide help form`, async() => {
	mainPage = new MainPage();
	(await mainPage.commonElement).isExisting();
	await mainPage.clickHERELink();
});
Then(`The form content is hidden`, async() => {
	registrationPage = new RegistrationPage();
	(await registrationPage.commonElement).isExisting();
	await registrationPage.acceptCookies();
	await registrationPage.hideHelpBox();
	await registrationPage.checkHelpBoxVisibility();
	expect(registrationPage.formContainer).not.to.be.true;
});