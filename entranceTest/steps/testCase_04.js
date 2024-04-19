import { Given, Then, When } from "@wdio/cucumber-framework";
import {expect} from '@wdio/globals';
import MainPage from "../pages/mainPage.js";
import RegistrationPage from "../pages/registrationPage.js";


let mainPage, registrationPage;

Then(`I Validate that timer starts from {string}`, async(string) => {
	mainPage = new MainPage();
	await mainPage.clickHERELink();
	registrationPage = new RegistrationPage();
	await expect(await registrationPage.jsTimerStartCount()).toEqual(string);
});