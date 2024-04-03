

class BaseElement {

	constructor(elLocator, elName) {
	  this.elLocator = elLocator;
	  this.elName = elName;
	}
  
	get element() {
	  return $(this.elLocator);
	}
  
	async clickOnIt() {
	  await this.element.click();
	}
  
	async clearAndType(value) {
	  await this.element.clearValue();
	  await this.element.addValue(value);
	}
  
	async hoverOver() {
	  await this.element.moveTo();
	}
  
	async getText() {
	  return await this.element.getText();
	}
}
  
export default BaseElement;
  