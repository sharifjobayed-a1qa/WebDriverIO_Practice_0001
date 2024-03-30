

import {browser} from '@wdio/globals';


class SearchPage{

	async printPageTitle(){
		console.log(await browser.getTitle());
	}

	get searchField(){
		return $(`//*[contains(@id,'searchInput')]`);
	}

	async typeSearchContent(){
		(await this.searchField).setValue(`Imran Khan`);
	}

	get searchResultsDropdown(){
		return $(`//*[contains(@id,'typeahead-suggestions')]//*[contains(@class,'suggestions-dropdown')]`);
	}

	get searchResults(){
		return $$(`//*[contains(@class,'suggestion-link')]`);
	}

	async clickOnTargetResult(searchResultIndex){
		(await this.searchResultsDropdown).waitForDisplayed(true);
		await this.searchResults[searchResultIndex].click();
	}

}

export default new SearchPage();