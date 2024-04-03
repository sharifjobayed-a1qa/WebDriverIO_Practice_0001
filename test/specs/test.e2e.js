

import MainPage from "../pageobjects/mainPage.js";
import KeyPressesPage from "../pageobjects/keyPressesPage.js";
import JSAlertPage from "../pageobjects/jsAlertPage.js";


describe('Main Page Tests', () => {
  let mainPage, keyPressesPage, jsAlertPage;

  beforeEach(async () => {
    mainPage = new MainPage();
    await browser.url(mainPage.pageUrl);
  });



  
  it('should hover on Hovers link', async () => {
    await mainPage.hoverOnHoversLink ();
  });

  it('should click on Key Presses page link and navigate', async () => {
    await mainPage.clickOnKeyPressesPageLink ();
    keyPressesPage = new KeyPressesPage();
    await keyPressesPage.clickOnTextField();
    await keyPressesPage.pressKeyInTextField();
  });

  it('should click on JS Alert page link and navigate', async () => {
    await mainPage.clickOnJSAlertPageLink ();    
    jsAlertPage = new JSAlertPage();
    await jsAlertPage.handleAlert();
    await jsAlertPage.handleConfirm();
  });

});
