

import BaseElement from "./baseElement.js";
import BasePage from "./basePage.js";

class MainPage extends BasePage {
  constructor() {
    super(`https://the-internet.herokuapp.com`);
  }

  async hoverOnHoversLink () {
	await (await this.findElement(`//*[contains(@href,'/hovers')]`,`Hovers Link`)).hoverOver();
  }

  async clickOnKeyPressesPageLink () {
	await (await this.findElement(`//*[contains(@href,'/key_presses')]`,`Key Presses Page Link`)).clickOnIt();
  }

  async clickOnJSAlertPageLink () {
    await (await this.findElement(`//*[contains(@href,'/javascript_alerts')]`,`JS Alert Page Link`)).clickOnIt();
  }

}

export default MainPage;
