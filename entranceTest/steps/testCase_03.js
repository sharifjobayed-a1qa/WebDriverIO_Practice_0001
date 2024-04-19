import { Given, Then, When } from "@wdio/cucumber-framework";
import {expect} from '@wdio/globals';
import MainPage from "../pages/mainPage.js";
import RegistrationPage from "../pages/registrationPage.js";


let mainPage, registrationPage;

When(`I Accept cookies`, async() => {
	mainPage = new MainPage();
	await mainPage.clickHERELink();
	registrationPage = new RegistrationPage();
	await registrationPage.acceptCookies();
});
Then(`The first form warning says {string}`, async(string) => {
	await expect(await registrationPage.firstWarningText()).toEqual(string);
});