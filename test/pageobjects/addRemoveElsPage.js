

class AddRemoveElsPage{

	get addElBtn(){
		return $(`//*[text()='Add Element']`);
	}

	async clickAddElBtn(){
		(await this.addElBtn).click();
	}

	get deleteBtn(){
		return $(`//*[text()='Delete']`);
	}

	async clickDeleteBtn(){
		(await this.deleteBtn).click();
	}

}

export default new AddRemoveElsPage();