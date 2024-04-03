

import BaseElement from "./baseElement.js";

class BasePage {

  constructor(pageUrl) {
    this.pageUrl = pageUrl;
  }

  async goToURL () {
    await browser.url(this.pageUrl);
  }
  async currentPageTitle () {
	return await browser.getTitle();
  }
  async findElement (elLocator, elName) {
    return new BaseElement(elLocator, elName);
  }
}

export default BasePage;
