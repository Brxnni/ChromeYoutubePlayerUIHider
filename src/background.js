// Add standard settings when none are there yet
chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({
		// this doesn't do anything yet
		hotkey: ["ctrl", "i"]
	});
});
