import {mainPage} from '../pages/mainPage';
import {browser} from '@wdio/globals';


describe(``,async()=>{

    beforeEach(``,async()=>{
        await browser.setWindowSize(1440,900);
        await browser.url();
    });

    afterEach(``,async()=>{
        await browser.deleteSession();
    });

    it(``,async()=>{
        const MP=new mainPage();
        await MP.clickOnAddRemoveElementLink();
    });

});