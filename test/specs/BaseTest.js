

export class BaseTest{
	
	BaseTest(){
		before(`Setup the browser`,async()=>{
			await browser.setWindowSize(1440,900);
		});


		after(`End the session`,async()=>{
			await browser.closeWindow();
		});
	}

}