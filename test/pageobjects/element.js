class Element {
    constructor(elementLocator, elementName) {
        this.elLocator = elementLocator;
        this.elName = elementName;
    }

    async findElement() {
        return await $(this.elLocator);
    }

    async click() {
        const element=await this.findElement();
        await element.click();
    }

    async clearAndType(value) {
        const element=await this.findElement();
        await element.clearValue();
        await element.setValue(value);
    }

    async getText() {
        const element=await this.findElement();
        return await element.getText();
    }

    async hover() {
        const element=await this.findElement();
        await element.moveTo();
    }

}

export default Element;
