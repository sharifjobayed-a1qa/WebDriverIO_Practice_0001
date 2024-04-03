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

}

export default MainPage;
