document.getElementById('authorize-button').addEventListener('click', function() {
    chrome.identity.getAuthToken({interactive: true}, function(token) {
        if (chrome.runtime.lastError) {
            document.getElementById('content').textContent = 'Authorization failed: ' + chrome.runtime.lastError.message;
            return;
        }

        document.getElementById('content').textContent = 'Authorization successful! Token: ' + token;
        // You can now use the token to interact with Google Sheets
    });
});
