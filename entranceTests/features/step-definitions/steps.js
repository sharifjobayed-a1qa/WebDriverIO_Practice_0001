

import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/mainPage.js';


let mainPage;

Given (`I'm on the Home page`, async ()=>{
	mainPage = new MainPage();
	await mainPage.goToTargetURL();
	await mainPage.confirmMainPage();
});
When (`I click the HERE link to navigate the next page.`, async ()=>{
	await mainPage.clickOnHERELink();
});
Then (`The '1' card is open.`, async ()=>{
	
});
When (`I input random valid password, email, accept the terms of use and click "next" button.`, async ()=>{
	
});
Then (`The '2' card is open.`, async ()=>{
	
});
When (`I Choose 2 random interests, upload image, click "Next" button.`, async ()=>{
	
});
Then (`The '3' card is open.`, async ()=>{
	
});