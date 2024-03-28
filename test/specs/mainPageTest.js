
import { baseTest } from "../specs/baseTest/";

export class mainPageTest extends baseTest {
    constructor() {
        super();

        describe("Test the mainPage", async () => {
            it("should have the correct title", async () => {
                const title = await browser.getTitle();
                console.log("Title:", title);
            });
        });
    }
}
