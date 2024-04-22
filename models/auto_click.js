class AutoClick {
    constructor(elementld) {
        this.elementld = elementld;
        this.startClicks();
    }

    startClicks() {
        document.getElementById(this.elementld).click(); // 获取元素并模拟点击
    }
}