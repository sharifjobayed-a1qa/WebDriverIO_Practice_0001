import { Given, Then, When,  } from "@wdio/cucumber-framework";
import {assert, expect, should} from 'chai';
import MainPage from "../pages/mainPage.js";
import RegistrationPage from "../pages/registrationPage.js";
import ProfilePage from "../pages/profilePage.js";


let mainPage, registrationPage, profilePage;

Given(`I'm on the Home page`, async() => {
	mainPage = new MainPage();
	await mainPage.goToMainPage();
	(await mainPage.commonElement).isExisting();
});
When(`I click the HERE link`, async() => {
	await mainPage.clickHERELink();
});
Then(`The '1' card is open`, async() => {
	registrationPage = new RegistrationPage();
	(await registrationPage.commonElement).isExisting();
});
When(`I input random valid password, email, accept TOU & press next button`, async() => {
	await registrationPage.acceptCookies();
	await registrationPage.enterCredentialsAndPressNext(`0-Password-0`, `a1qa`, `yopmail`);
});
Then(`The '2' card is open`, async() => {
	profilePage = new ProfilePage();
	(await profilePage.commonElement).isExisting();
});
When(`I Choose 3 random interests`, async() => {
	await profilePage.clickNumbersOfInterests(3);
});
When(`I click Next button`, async() => {
	await profilePage.clickNextBtn();
});
Then(`The text {string} appear & it's text color is green`, async(string) => {
	expect(await profilePage.picUploadWarningText()).to.equal(string);
	expect((await profilePage.picUploadWarningTextColor())).to.equal(`rgba(41,197,102,1)`);
});
