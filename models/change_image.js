function changeImage(id, changeSrc) {
    alert("已执行changeImage");
    let element = document.getElementById(id);
    //如果src属性中有bulbon这个单词，则将其改为下面这个src
    element.src = changeSrc;
}