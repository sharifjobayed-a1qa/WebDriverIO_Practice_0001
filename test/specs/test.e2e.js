import { beforeEach } from "mocha";
import MainPage from "../pageobjects/mainPage.js";
import KeyPressesPage from "../pageobjects/keyPressesPage.js";
import JSAlertsPage from "../pageobjects/jsAlertsPage.js";


beforeEach(`Test Setup`, async () => {
    await browser.url(`https://the-internet.herokuapp.com`);
});

describe('The Internet HerokuApp tests', () => {

    const mainPage = new MainPage();
    const keyPressesPage = new KeyPressesPage();
    const jsAlertsPage = new JSAlertsPage();

    
    it('Test Case 03', async () => {
        await mainPage.hoverOnHoversLink();
    });

    it('Test Case 04', async () => {
        mainPage.clickKeyPressesLink();        
        
        keyPressesPage.clickOnInputField();
        keyPressesPage.pressBackspaceKey();
    });

    it('Test Case 05', async () => {
        mainPage.clickJSAlertsLink();
        
        jsAlertsPage.clickAlertBtn();
        jsAlertsPage.acceptCurrentAlert();
        jsAlertsPage.clickConfirmBtn();
        jsAlertsPage.denyConfirmDialogue();
        jsAlertsPage.clickPromptBtn();
        jsAlertsPage.typeAndAcceptPrompt();
    });

})

