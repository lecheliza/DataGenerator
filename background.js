function generateString() {
    var result = [];
    var pass = [];
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

    let index;
    let outdex = 0;
    var elements = document.getElementsByTagName("input");
    for (index = 0; index < elements.length; index++) {
        result = [];
        for (outdex = 0; outdex < 12; outdex++) {
            result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
        }
        if (elements[index].type === "password") {
            if (pass.length === 0) pass.push(result.join(''));
        }
        elements[index].value = result.join('');
        if (elements[index].type === "password") {
            elements[index].value = pass.join('');
        }
    }
        if (confirm("Do you want to save data?")) {
            for (let index = 0; index < elements.length; index++) {
                window.localStorage.setItem(elements[index].name, elements[index].value);
                console.log(window.localStorage.getItem(elements[index].name));
            }
        }
}


chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: generateString
    });
});
