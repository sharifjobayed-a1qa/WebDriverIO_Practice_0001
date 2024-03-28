
import {baseUrl} from '@wdio/config';

export class baseTest {
    constructor() {
        before(async () => {
            await browser.setWindowSize(1440, 900);
            await browser.url(baseUrl);
        });

        after(async () => {
            await browser.closeWindow();
        });
    }
}
