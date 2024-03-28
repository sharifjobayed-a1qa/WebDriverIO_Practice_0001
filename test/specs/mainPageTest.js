import {mainPage} from '../pages/mainPage';
import {browser} from '@wdio/globals';


describe(``,async()=>{

    it(``,async()=>{
        const MP=new mainPage();
        await MP.clickOnAddRemoveElementLink();
    });

});