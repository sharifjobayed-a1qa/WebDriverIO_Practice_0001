import BaseElement from "./baseElement.js";
import BasePage from "./basePage.js";


class MainPage extends BasePage{

  constructor () {
    super();
  }

  async hoverOnHoversLink () {
    this.element = new BaseElement(`//a[normalize-space()='Hovers']`, `Hovers Link`);
    await this.element.hoverOverIt();
  }
  async clickKeyPressesLink () {
    await (await this.currentElement(`//a[normalize-space()='Key Presses']`,`Key Presses Link`)).clickOnIt();
  }

}

export default MainPage;
