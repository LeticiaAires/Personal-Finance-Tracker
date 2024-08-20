chrome.identity.getAuthToken({interactive: true}, function(token) {
    if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message);
        return;
    }

    // Use the token to make authenticated requests to Google Sheets API
    fetch('https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/A1:D5', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});

