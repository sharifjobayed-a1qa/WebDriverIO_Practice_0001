

class SearchResultPage{

	get pageTitle(){
		return browser.getTitle();
	}

	async checkPageTitle(pageTitleText){
		await expect(await this.pageTitle).toBe(pageTitleText);
	}

	get toolsDropDownArrow(){
		return $(`//*[contains(@id,'vector-page-tools-dropdown-checkbox')]`);
	}

	async clickToolsDropDownArrow(){
		(await this.toolsDropDownArrow).click();
		// await driver.pause();
	}

	/*get toolsDropDownMenu(){
		return $(`//*[contains(@id,'p-tb')]//*[contains(@class,'vector-menu-content-list')]`);
	}

	async checkToolsDropDownMenu(){
		await (await this.toolsDropDownMenu).waitForDisplayed({timeout:10000});
	}*/

	get pdfDownloadLink(){
		return $(`//*[text()='Download as PDF']`);
	}

	async clickPdfDownloadLink(){
		// await this.checkToolsDropDownMenu();
		await (await this.pdfDownloadLink).scrollIntoView({
			behavior:`smooth`,
			block:`center`,
			inline:`nearest`
		});
		/*scroll({
			top:500,
			left:0,
			behavior:`smooth`
		});*/
		await (await this.pdfDownloadLink).waitForClickable().click();
	}

}

export default new SearchResultPage();