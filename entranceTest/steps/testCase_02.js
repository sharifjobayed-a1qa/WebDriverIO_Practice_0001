import { Then, When } from "@wdio/cucumber-framework";
import {expect} from '@wdio/globals';
import MainPage from "../pages/mainPage.js";
import RegistrationPage from "../pages/registrationPage.js";


let mainPage, registrationPage;

When(`I hide help form`, async() => {
	mainPage = new MainPage();
	await mainPage.clickHERELink();
	registrationPage = new RegistrationPage();
	await registrationPage.acceptCookies();
	await registrationPage.hideHelpBox();
});
Then(`The form content is hidden`, async() => {
	await registrationPage.checkHelpBoxVisibility(15000);
	await expect(await $(`//div[@class='help-form__container']`)).not.toBeDisabled();
});