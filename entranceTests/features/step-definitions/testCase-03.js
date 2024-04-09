

import { Given, When, Then } from "@wdio/cucumber-framework";
import {expect} from '@wdio/globals';
import MainPage from "../pageobjects/mainPage.js";
import RegistrationPage from "../pageobjects/registrationPage.js";


let mainPage, registrationPage, profilePage;

When (`I Accept cookies.`, async ()=>{
	mainPage = new MainPage();
	await mainPage.clickOnHERELink();
	registrationPage = new RegistrationPage();
	await registrationPage.acceptCookies();
});

Then (`The first form warning says {string}.`, async (string)=>{
	await expect(await registrationPage.passwordLengthHint()).toEqual(string);
	await registrationPage.verifyTextColor();
});