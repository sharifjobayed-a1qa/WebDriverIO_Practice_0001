import { Given, Then, When,  } from "@wdio/cucumber-framework";
import {expect} from '@wdio/globals';
import BasePage from "../pages/basePage.js";
import MainPage from "../pages/mainPage.js";
import RegistrationPage from "../pages/registrationPage.js";
import ProfilePage from "../pages/profilePage.js";


let mainPage, registrationPage, profilePage;

Given(`I'm on the Home page`, async() => {
	mainPage = new MainPage();
	await mainPage.goToMainPage();	
	await expect(mainPage.commonElement).toBeExisting();
	await expect($(`//a[@class='start__link']`)).toBeExisting();
});
When(`I click the HERE link`, async() => {
	await mainPage.clickHERELink();
});
Then(`The '1' card is open`, async() => {
	await expect($(`//div[@class='timer timer--white timer--center']`)).toBeExisting();
});
When(`I input random valid password, email, accept TOU & press next button`, async() => {
	registrationPage = new RegistrationPage();
	await expect(registrationPage.commonElement).toBeExisting();
	await registrationPage.acceptCookies();
	await registrationPage.enterCredentialsAndPressNext();

});
Then(`The '2' card is open`, async() => {
	profilePage = new ProfilePage();
	await (await profilePage.cardNumber()).waitUntillElementVisible();
	await expect(profilePage.commonElement).toBeExisting();
	await expect(await $(`//div[@class='page-indicator']`)).toBeDisplayed();
});
When(`I Choose 3 random interests`, async() => {});
When(`I click "Next" button`, async() => {});
Then(`The text 'Please upload a picture' appear & it's text color is green`, async() => {});
