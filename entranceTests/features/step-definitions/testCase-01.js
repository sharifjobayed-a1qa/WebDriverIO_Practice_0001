

import { Given, When, Then } from '@wdio/cucumber-framework';
import {expect} from '@wdio/globals';
import MainPage from '../pageobjects/mainPage.js';
import RegistrationPage from '../pageobjects/registrationPage.js';
import ProfilePage from '../pageobjects/profilePage.js';


let mainPage, registrationPage, profilePage;

Given (`I'm on the Home page`, async ()=>{
	mainPage = new MainPage();
	await mainPage.goToTargetURL();
	await mainPage.confirmMainPage();
});
When (`I click the HERE link to navigate the next page.`, async ()=>{
	await mainPage.clickOnHERELink();
});
Then (`The '1' card is open.`, async ()=>{
	registrationPage = new RegistrationPage();
	await registrationPage.confirmRegistrationPage();
	await registrationPage.acceptCookies();
});
When (`I input random valid password, email, accept the terms of use and click "next" button.`, async ()=>{
	await registrationPage.submitRegistrationForm();
});
Then (`The '2' card is open.`, async ()=>{
	profilePage = new ProfilePage();
	await profilePage.confirmProfilePage();
});
When (`I Choose 3 random interests, click "Next" button.`, async ()=>{
	await profilePage.selectAny3Interests();
	await profilePage.clickOnNextBtn();
});
Then (`The expected result is, Text {string} appear, text color is green.`, async (string)=>{
	await expect(await profilePage.profilePicWarning()).toEqual(string);
	await profilePage.verifyTextColor();
});