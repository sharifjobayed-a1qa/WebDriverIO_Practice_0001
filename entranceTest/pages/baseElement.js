import {$, $$} from '@wdio/globals';

class BaseElement {
    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    async elLocator() {
        const element = await $(this.locator);
        const name = await this.name;
        return element;
    }

    async elLocators() {
        const elements = await $$(this.locator);
        const name = await this.name;
        return elements;
    }

    async doClick() {
        await (await this.elLocator()).click();
    }

    async clearAndType(value) {
        const element = await this.elLocator();
        await element.clearValue();
        await element.addValue(value);
    }

    async scrollToPosition() {
        await (await this.elLocator()).scrollIntoView();
    }

    async elementText() {
        return (await this.elLocator()).getText();
    }

    async elementExistence() {
        return (await this.elLocator()).isExisting();
    }

    async elementTextColor() {
        return (await this.elLocator()).getCSSProperty('color').then(p => p.value);
    }

    async waitUntilElementVisible() {
        await (await this.elLocator()).waitForDisplayed({timeout: 15000});
    }

    async waitUntilInvisible(ms) {
        browser.waitUntil(() => {
            return !this.elLocator().then(p => {
                if (!p) return true;
            })
        }, {
            timeout: await ms,
            timeoutMsg: 'Element did not disappear within 15 seconds',
            interval: 500,
        });
    }
}

export default BaseElement;
