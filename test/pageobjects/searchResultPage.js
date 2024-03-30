

class SearchResultPage{

	get pageTitle(){
		return browser.getTitle();
	}

	async checkPageTitle(){
		await expect(await this.pageTitle).toBe(`Imran Khan - Wikipedia`);
	}

}

export default new SearchResultPage();