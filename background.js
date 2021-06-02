
function generateString() {
    var result = [];
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let index = 0;
    let outdex = 0;
    var elements = document.getElementsByTagName("input");
    for (index = 0; index < elements.length; index++) {
        result = [];
        for (outdex = 0; outdex < 10; outdex++) {
            result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
        }
        elements[index].value = result.join('');
    }
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: generateString
    });
});