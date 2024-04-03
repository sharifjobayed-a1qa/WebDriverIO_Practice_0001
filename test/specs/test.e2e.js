import { beforeEach } from "mocha";
import MainPage from "../pageobjects/mainPage.js";
import KeyPressesPage from "../pageobjects/keyPressesPage.js";


beforeEach(`Test Setup`, async () => {
    await browser.url(`https://the-internet.herokuapp.com`);
});

describe('The Internet HerokuApp tests', () => {

    const mainPage = new MainPage();
    
    it('Test Case 03', async () => {
        await mainPage.hoverOnHoversLink();
    });

    it('Test Case 04', async () => {
        const keyPressesPage = new KeyPressesPage();
        mainPage.clickKeyPressesLink();
        keyPressesPage.clickOnInputField();
        // keyPressesPage.pressBackspaceKey();
    });

    it('Test Case 05', async () => {
        
    });

})

