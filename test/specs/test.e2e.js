import { beforeEach } from 'mocha';
import MainPage from '../pageobjects/mainPage.js';
import KeyPresses from '../pageobjects/keyPresses.js';
import JSAlertPage from '../pageobjects/jsAlertPage.js';


beforeEach(``,async()=>{
    await browser.setWindowSize(1440,900);
    await browser.url(`https://the-internet.herokuapp.com`);
});


describe('The Internet HerokuApp Test',async()=>{

    let MP,KP,JA;

    it('Test Case 3', async () => {
        MP=new MainPage();
        await MP.hoverOverLink();
    });

    it(`Test Case 4`,async()=>{
        MP=new MainPage();
        await MP.clickKeyPressesLink();

        KP=new KeyPresses();
        await KP.focusKeyPressesField();
        await KP.typeText(await browser.keys([`Backspace`]));

    });

    it(`Test Case 5`,async()=>{
        MP=new MainPage();
        await MP.clickJSAlertLink();

        JA=new JSAlertPage();
        await JA.clickJSAlertBtn();
        await JA.closeJSAlert();
        await JA.clickJSConfirmBtn();
        await JA.denyJSConfirm();
        await JA.clickJSPromptBtn();
        await JA.typeInPrompt(`Hello`);
    });

})

