

class DynamicallyLoadedPage{

	get element2Link(){
		return $(`//*[text()='Example 2: Element rendered after the fact']`);
	}

	async clickElement2Link(){
		await this.element2Link.click();
	}

}

export default new DynamicallyLoadedPage();