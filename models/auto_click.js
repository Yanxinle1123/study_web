class AutoClick {
    constructor(elementld) {
        this.elementld = elementld;
    }

    startClicks() {
        document.getElementById(this.elementld).click();
    }
}