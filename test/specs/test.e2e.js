import { beforeEach } from 'mocha';
import MainPage from '../pageobjects/mainPage.js';


beforeEach(``,async()=>{
    await browser.setWindowSize(1440,900);
    await browser.url(`https://the-internet.herokuapp.com`);
});


describe('', async() => {

    let MP;

    it('', async () => {
        MP=new MainPage();
        MP.hoverOverLink();
    })
})

