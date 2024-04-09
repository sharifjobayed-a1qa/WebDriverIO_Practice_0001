

import { Given, When, Then } from "@wdio/cucumber-framework";
import MainPage from "../pageobjects/mainPage.js";
import RegistrationPage from "../pageobjects/registrationPage.js";


let mainPage, registrationPage;

When (`I hide help form.`, async ()=>{
	mainPage = new MainPage();
	await mainPage.clickOnHERELink();
	registrationPage = new RegistrationPage();
	await registrationPage.acceptCookies();
	await registrationPage.hideHelpBox();
});

Then (`The form content is hidden.`, async ()=>{});