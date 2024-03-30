

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
	}

	get toolsDropDownMenu(){
		return $(`//*[contains(@id,'p-tb')]//*[contains(@class,'vector-menu-content-list')]`);
	}

	async checkToolsDropDownMenu(){
		await (await this.toolsDropDownMenu).waitForDisplayed({timeout:10000});
	}

	get pdfDownloadLink(){
		return $(`//*[text()='Download as PDF']`);
	}

	async clickPdfDownloadLink(){
		await this.checkToolsDropDownMenu();
		await (await this.pdfDownloadLink).scrollIntoView();
		await (await this.pdfDownloadLink).click();
	}

}

export default new SearchResultPage();