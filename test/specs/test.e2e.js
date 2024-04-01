import { beforeEach } from 'mocha';
import mainPage from '../pageobjects/mainPage.js';


beforeEach(``,async()=>{
    await browser.setWindowSize(1440,900);
    await browser.url(`https://the-internet.herokuapp.com`);
});


describe('', async() => {
    it('', async () => {
        
    })
})

