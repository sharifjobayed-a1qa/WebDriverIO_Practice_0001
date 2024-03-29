

import { beforeEach } from 'mocha';
import mainPage from '../pageobjects/mainPage.js';
import addRemoveElsPage from '../pageobjects/addRemoveElsPage.js';


beforeEach(async()=>{
    await browser.setWindowSize(1440,900);
    await browser.url(`https://the-internet.herokuapp.com`);
});

describe('Test Suite 01', () => {
    it('Test Case 01', async () => {
        await mainPage.clickAddRemoveElsLink();
        await addRemoveElsPage.clickAddElBtn();
        await addRemoveElsPage.clickDeleteBtn();
    })
});

