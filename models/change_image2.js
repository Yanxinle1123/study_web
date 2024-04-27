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