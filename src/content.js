function addKeyboardListener(){

	let url = location.href;
	if (url.match(globalThis.youtubeURLRegex)){
		console.log("youtube detected!");
	}

}

addKeyboardListener();
