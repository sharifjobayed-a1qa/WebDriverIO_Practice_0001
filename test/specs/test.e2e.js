

import MainPage from "../pageobjects/mainPage.js";


describe('Main Page Tests', () => {
  let mainPage;

  beforeEach(async () => {
    mainPage = new MainPage();
    await browser.url(mainPage.pageUrl);
  });



  
  it('should hover on Hovers link', async () => {
    await mainPage.hoverOnHoversLink ();
  });

  it('should click on Key Presses page link and navigate', async () => {
    await mainPage.clickOnKeyPressesPageLink ();
  });

  it('should click on JS Alert page link and navigate', async () => {
    await mainPage.clickOnJSAlertPageLink ();
  });
});
