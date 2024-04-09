

import { Given, When, Then } from "@wdio/cucumber-framework";
import MainPage from "../pageobjects/mainPage.js";
import RegistrationPage from "../pageobjects/registrationPage.js";


let mainPage, registrationPage, profilePage;

When (`I Validate that timer starts from {string}`, async (string)=>{
	mainPage = new MainPage();
	await mainPage.checkPageTitle();
	await mainPage.clickOnHERELink();
	registrationPage = new RegistrationPage();
	await registrationPage.timeCounterFromAll0(string);
	await registrationPage.acceptCookies();
});