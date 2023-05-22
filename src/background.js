// Add standard settings when none are there yet
chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({
		hotkey: {
			altKey: false,
			key: "i",
			ctrlKey: true,
			shiftKey: false
		}
	});
});
