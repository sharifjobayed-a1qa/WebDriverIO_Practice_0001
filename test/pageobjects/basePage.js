

import BaseElement from "./baseElement.js";

class BasePage {

  constructor(pageUrl) {
    this.pageUrl = pageUrl;
  }

  async open() {
    await browser.url(this.pageUrl);
  }

  async findElement(elLocator, elName) {
    return new BaseElement(elLocator, elName);
  }
}

export default BasePage;
