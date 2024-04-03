import { beforeEach } from "mocha";
import MainPage from "../pageobjects/mainPage.js";


beforeEach(`Test Setup`, async () => {
    await browser.url(`https://the-internet.herokuapp.com`);
});

describe('The Internet HerokuApp tests', () => {
    
    it('Test Case 03', async () => {
        const mainPage = new MainPage();
        await mainPage.hoverOnHoversLink();
    });

    it('Test Case 04', async () => {
        
    });

    it('Test Case 05', async () => {
        
    });

})

