import Element from "./element.js";

class MainPage {
    constructor() {
        this.linkToHover = new Element(`//*[text()='Hovers']`, `Link to Hover`);
    }

    async hoverOverLink() {
        await this.linkToHover.hover();
    }
}

export default MainPage;
