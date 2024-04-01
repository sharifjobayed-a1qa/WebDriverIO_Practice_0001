import { beforeEach } from 'mocha';
import MainPage from '../pageobjects/mainPage.js';
import KeyPresses from '../pageobjects/keyPresses.js';


beforeEach(``,async()=>{
    await browser.setWindowSize(1440,900);
    await browser.url(`https://the-internet.herokuapp.com`);
});


describe('The Internet HerokuApp Test',async()=>{

    let MP;
    let KP;

    it('Test Case 1', async () => {
        MP=new MainPage();
        MP.hoverOverLink();
    });

    it(`Test Case 2`,async()=>{
        MP=new MainPage();
        MP.clickKeyPressesLink();

        KP=new KeyPresses();
        KP.focusKeyPressesField();
        KP.typeText(await browser.keys(['Backspace']));

    });

})

