function changeText(id, changeText) {
    const x = document.getElementById(id); // 查找元素
    x.innerHTML = changeText; // 修改元素
}

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