function changeImage(id, changeSrc) {
    let element = document.getElementById(id);
    //如果src属性中有bulbon这个单词，则将其改为下面这个src
    element.src = changeSrc;
}

let imageNumber = 1;

function changeImage2(id, changeSrc1, changeSrc2) {
    if (imageNumber === 1) {
        changeImage(id, changeSrc1);
        imageNumber += 1;
    } else {
        changeImage(id, changeSrc2);
        imageNumber -= 1;
    }
}