function show() {
    alert("Hello, World!");
    return null;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    return `${year}年${month}月${day}日  ${hours}时${minutes}分${seconds}.${milliseconds}秒`;
}

function displayDate() {
    for (let i = 0; i < 10; i++) {
        document.getElementById("demo").innerHTML = formatDate(new Date());
    }
}

let clickCount = 0;

function autoClick() {
    if (clickCount < 10) {
        document.getElementById("Button").click();
        setTimeout(autoClick, 100);
    }
}