function formatDate() {
    const date = new Time(new Date());
    return date.getNowDate();
}

function displayDate() {
    for (let i = 0; i < 10; i++) {
        changeText("demo", formatDate()); // 改变元素
    }
}

let clickCount = 0;

function autoClick() {
    if (clickCount < 10) {
        new AutoClick("timeButton"); // 创建一个新的 AutoClick 类的实例
        setTimeout(autoClick, 80);
    }
}