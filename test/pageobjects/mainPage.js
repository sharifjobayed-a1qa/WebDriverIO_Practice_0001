

class MainPage{

	get dynamicLoadingLink(){
		return $(`//*[text()='Dynamic Loading']`);
	}

	async clickDynamicLoadingLink(){
		(await this.dynamicLoadingLink).click();
	}

	

}

export default new MainPage();