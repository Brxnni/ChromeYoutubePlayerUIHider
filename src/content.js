function addKeyboardListener(){

	let url = location.href;
	if (url.match(globalThis.youtubeURLRegex)){

		// Inject key listener (fuck you google chrome hotkey api, you suck)
		window.onkeydown = function (event){
			// Check if event matches up with event in settings and if so, toggleVisivility()
			for (let property of globalThis.eventMatchingProperties){
				if (event[property] !== hotkey[property]) return;
			}

			toggleVisibility();
		}
	}
}

function getAllElementsByXPath(xpath){
	let query = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	let elements = [];
	for (let i = 0; i < query.snapshotLength; i++){
		elements.push(query.snapshotItem(i));
	}
	
	return elements;
}

let hotkey;
let visible = true;

async function getUserSettings(){
	let storage = await chrome.storage.sync.get();
	hotkey = storage.hotkey;
}

function toggleVisibility(){
	let elements = getAllElementsByXPath(globalThis.playerUIXPath);
	let newValue = visible ? "hidden" : "visible";
	visible = !visible;

	for (let element of elements){

		// Elements that are normally invisible (like outro widgets) shouldn't be turned on when hitting the hotkey twice
		// Despite not being at the end yet, so their visibility value needs to be saved
		if (!visible){
			// Store old value in temporary property
			let oldValue = element.style.visibility;
			element.style.__chromeext_oldvisibility = oldValue;
			// Overwrite
			element.style.visibility = newValue;
		} else {
			// Check for temporary property
			if (element.style.__chromeext_oldvisibility !== undefined){
				element.style.visibility = element.style.__chromeext_oldvisibility;
				element.style.__chromeext_oldvisibility = undefined;
			// Default
			} else {
				element.style.visibility = newValue;
			}
		}

	}
}

(async function(){
	await getUserSettings();
	addKeyboardListener();
})();
