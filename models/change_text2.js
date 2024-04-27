let textNumber = 1;

function changeText2(id, changeText1, changeText2) {
    if (textNumber === 1) {
        changeText(id, changeText1);
        textNumber += 1;
    } else {
        changeText(id, changeText2);
        textNumber -= 1;
    }
}