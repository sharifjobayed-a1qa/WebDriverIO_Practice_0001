

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

}

export default new SearchPage();