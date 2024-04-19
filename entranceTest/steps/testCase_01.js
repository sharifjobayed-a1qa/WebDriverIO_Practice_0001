import { Given, Then, When,  } from "@wdio/cucumber-framework";
import {expect} from '@wdio/globals';
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
	await registrationPage.enterCredentialsAndPressNext(`0-Password-0`, `somebody`, `yopmail`);

});
Then(`The '2' card is open`, async() => {
	profilePage = new ProfilePage();
	await (await profilePage.cardNumber()).waitUntillElementVisible();
	await expect(profilePage.commonElement).toBeExisting();
	await expect($(`//div[@class='page-indicator']`)).toBeDisplayed();
});
When(`I Choose 3 random interests`, async() => {
	await profilePage.click3Interests(0, 3);
});
When(`I click Next button`, async() => {
	await profilePage.clickNextBtn();
});
Then(`The text {string} appear & it's text color is green`, async(string) => {
	await expect(await profilePage.picUploadWarningText()).toEqual(string);
	await expect(await profilePage.picUploadWarningTextColor()).toEqual(`rgba(41,197,102,1)`);
});
