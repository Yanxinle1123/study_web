let number = 1;

function changeImage2(id, changeSrc1, changeSrc2) {
    alert("已执行changeImage2")
    if (number === 1) {
        changeImage(id, changeSrc1);
        number += 1;
    } else {
        changeImage(id, changeSrc2);
        number -= 1;
    }
}