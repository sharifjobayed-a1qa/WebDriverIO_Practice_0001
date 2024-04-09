

import { Given, When, Then } from "@wdio/cucumber-framework";
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
	await registrationPage.verifyText(string);
	await registrationPage.verifyTextColor();
});