function formatDate() {
    const date = new Time(new Date());
    return date.getNowDate();
}

function displayDate() {
    for (let i = 0; i < 10; i++) {
        document.getElementById("demo").innerHTML = formatDate();
    }
}

let clickCount = 0;

function autoClick() {
    if (clickCount < 10) {
        new AutoClick("timeButton");
        setTimeout(autoClick, 80);
    }
}