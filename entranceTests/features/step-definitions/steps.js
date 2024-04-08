

import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/mainPage.js';
import RegistrationPage from '../pageobjects/registrationPage.js';


let mainPage, registrationPage;

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
	await registrationPage.fillRegistrationForm();
});
When (`I input random valid password, email, accept the terms of use and click "next" button.`, async ()=>{
	
});
Then (`The '2' card is open.`, async ()=>{
	
});
When (`I Choose 2 random interests, upload image, click "Next" button.`, async ()=>{
	
});
Then (`The '3' card is open.`, async ()=>{
	
});