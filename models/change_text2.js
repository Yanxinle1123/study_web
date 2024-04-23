let number = 1;

function changeText2(id, changeText1, changeText2) {
    if (number === 1) {
        changeText(id, changeText1);
        number += 1;
    } else {
        changeText(id, changeText2);
        number -= 1;
    }
}