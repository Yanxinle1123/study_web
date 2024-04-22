let number = 1;

function changeText(id, changeText1, changeText2) {
    if (number === 1) {
        changeElement(id, changeText1);
        number += 1;
    } else {
        changeElement(id, changeText2);
        number -= 1;
    }
}