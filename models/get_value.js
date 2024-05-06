function getTextBoxValue(id) {
    return document.getElementById(id).value;
}

function getRadioBoxValue(id) {
    return document.querySelector('input[name="radioName"]:checked').value;
}

function getCheckboxValue(id) {
    const checkboxes = document.querySelectorAll('input[name="checkboxName"]:checked');
    return Array.from(checkboxes).map(function (checkbox) {
        return checkbox.value;
    });
}