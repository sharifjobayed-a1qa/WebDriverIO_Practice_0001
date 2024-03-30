

import {beforeEach,describe,it} from 'mocha';
import searchPage from '../pageobjects/searchPage.js';
import searchResultPage from '../pageobjects/searchResultPage.js';


beforeEach(`Pre-test setup`,async()=>{
    await browser.setWindowSize(1440,900);
    await browser.url(`https://www.wikipedia.org`);
});

describe('Wikipedia Test',async()=>{
    
    it(`Wikipedia file download test`,async()=>{

        await searchPage.printPageTitle();
        await searchPage.typeSearchContent();
        await searchPage.clickOnTargetResult(0);

        await searchResultPage.checkPageTitle(`Imran Khan - Wikipedia`);
        await searchResultPage.clickToolsDropDownArrow();
        await searchResultPage.clickToolsDropDownArrow();
        await searchResultPage.clickPdfDownloadLink();

    });

});

// afterEach(async()=>{
//     await browser.deleteSession();
// });

