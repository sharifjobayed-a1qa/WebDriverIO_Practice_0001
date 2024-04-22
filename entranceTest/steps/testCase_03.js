import { Then, When } from "@wdio/cucumber-framework";
import {assert, expect, should} from 'chai';
import MainPage from "../pages/mainPage.js";
import RegistrationPage from "../pages/registrationPage.js";


let mainPage, registrationPage;

When(`I Accept cookies`, async() => {
	mainPage = new MainPage();
	(await mainPage.commonElement).isExisting();
	await mainPage.clickHERELink();
	registrationPage = new RegistrationPage();
	await registrationPage.acceptCookies();
});
Then(`The first form warning says {string}`, async(string) => {
	expect(await registrationPage.firstWarningText()).to.equal(string);
});