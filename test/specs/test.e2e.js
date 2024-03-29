

import dynamicallyLoadedPage from '../pageobjects/dynamicallyLoadedPage.js';
import element2Page from '../pageobjects/element2Page.js';
import mainPage from '../pageobjects/mainPage.js';


beforeEach(async()=>{
    await browser.setWindowSize(1440,900);
    await browser.url(`https://the-internet.herokuapp.com/`);
});

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await mainPage.clickDynamicLoadingLink();
        await dynamicallyLoadedPage.clickElement2Link();
        await element2Page.clickStartBtn();
        await element2Page.waitforHelloWorld();
    });
});

