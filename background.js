function generateString() {
    var result = [];
    var pass = [];
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    var specialCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890;!@()[]{}#?';
    var numbers = '0123456789';

    let index;
    let outdex = 0;
    var elements = document.getElementsByTagName("input");
    for (index = 0; index < elements.length; index++) {
        result = [];
        switch (elements[index].type) {
            case "password":
                if (pass.length === 0) {
                    for (outdex = 0; outdex < 15; outdex++) {
                        pass.push(specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length)));
                    }
                }
                elements[index].value = pass.join('');
                break;

            case "tel":
                for (outdex = 0; outdex < 9; outdex++) {
                    result.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
                }
                elements[index].value = result.join('');
                break;

            case "text":
                for (outdex = 0; outdex < 12; outdex++) {
                    result.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
                }
                elements[index].value = result.join('');
                break;

            default:
                for (outdex = 0; outdex < 12; outdex++) {
                    result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
                }
                elements[index].value = result.join('');
                break;
        }
    }

        if (confirm("Do you want to save data?")) {
            for (let index = 0; index < elements.length; index++) {
                window.localStorage.setItem(elements[index].name, elements[index].value);
                console.log(elements[index].name + " " + window.localStorage.getItem(elements[index].name));
            }
        }
}


chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: generateString
    });
});
