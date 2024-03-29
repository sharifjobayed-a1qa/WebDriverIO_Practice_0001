

class Element2Page{

	get startBtn(){
		return $(`//*[text()='Start']`);
	}

	async clickStartBtn(){
		await this.startBtn.click();
	}

}

export default new Element2Page();