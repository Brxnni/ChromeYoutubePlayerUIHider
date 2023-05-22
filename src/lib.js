let xpath =
	"/descendant::" + // Children, grandchildren etc.
	"*[contains(@class, 'ytp') and not(contains(@class, 'html5-video-container'))]"; // All .ytp-??? elements, except the player itself

globalThis.UIXPath =
	"/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[1]/div[2]/div/div/ytd-player/div/div" + // Path to video player
	xpath;

globalThis.FullscreenUIXPath =
	"/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[3]/div[2]/ytd-player/div/div" +
	xpath;

globalThis.youtubeURLRegex = /^.+:\/\/.+\.youtube\.com\/.+$/;
globalThis.eventMatchingProperties = ["altKey", "shiftKey", "ctrlKey", "key"];
