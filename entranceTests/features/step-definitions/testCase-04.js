

import { Given, When, Then } from "@wdio/cucumber-framework";
import MainPage from "../pageobjects/mainPage.js";


let mainPage, registrationPage, profilePage;

When (`I Validate that timer starts from "00:00"`, async ()=>{
	mainPage = new MainPage();
	await mainPage.checkPageTitle();
	await mainPage.clickOnHERELink();
});