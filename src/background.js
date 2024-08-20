chrome.runtime.onInstalled.addListener(function() {
    console.log("Finance Visualizer extension installed");
});

// Handle the OAuth 2.0 flow
chrome.identity.getAuthToken({interactive: true}, function(token) {
    if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message);
        return;
    }

    console.log('Token acquired:', token);
    // Now you can use this token to interact with the Google Sheets API
});
