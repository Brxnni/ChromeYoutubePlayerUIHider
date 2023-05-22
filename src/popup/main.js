let button = document.getElementById("toggle")

chrome.runtime.onMessage.addListener(function (req, sender, response){
	// TODO: Accepting this doesn't do anything because the hotkey is pressed while
	// This window isn't even open, meaning this never actually runs.
	// Instead, evrey time you open this window, request the current state of the UI
	// from the content script and modify the button accordingly.
	if (req.type === "toggle") toggleButton();
})

function toggleButton(){
	if (button.classList.contains("yes")){
		button.classList.remove("yes");
		button.classList.add("no");
	} else {
		button.classList.remove("no");
		button.classList.add("yes");
	}
}

function toggle(){
	toggleButton();

	chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, {type: "toggle"});
	});
}

button.onclick = toggle;