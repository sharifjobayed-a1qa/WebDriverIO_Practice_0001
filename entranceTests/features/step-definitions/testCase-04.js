

import { Given, When, Then } from "@wdio/cucumber-framework";
import {expect} from '@wdio/globals';
import MainPage from "../pageobjects/mainPage.js";
import RegistrationPage from "../pageobjects/registrationPage.js";


let mainPage, registrationPage;

When (`I Validate that timer starts from {string}`, async (string)=>{
	mainPage = new MainPage();
	await mainPage.checkPageTitle();
	await mainPage.clickOnHERELink();
	registrationPage = new RegistrationPage();
	await expect(await registrationPage.timeCounterFromAll0()).toEqual(string);
	// await registrationPage.acceptCookies();
});