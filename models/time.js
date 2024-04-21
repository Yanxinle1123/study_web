class Time {
    constructor(date) {
        this.year = date.getFullYear();
        this.month = String(date.getMonth() + 1).padStart(2, '0');
        this.day = String(date.getDate()).padStart(2, '0');
        this.hours = String(date.getHours()).padStart(2, '0');
        this.minutes = String(date.getMinutes()).padStart(2, '0');
        this.seconds = String(date.getSeconds()).padStart(2, '0');
        this.milliseconds = String(date.getMilliseconds()).padStart(3, '0');
    }

    getNowDate() {
        return `${this.getCentury()}世纪${this.getDecade()}年代${this.year}年${this.month}月${this.day}日  ${this.hours}时${this.minutes}分${this.seconds}.${this.milliseconds}秒`;
    }

    getCentury() {
        return Math.ceil(this.year / 100);
    }

    getDecade() {
        return Math.floor(this.year / 10) * 10;
    }

    getNowYear() {
        return `${this.year}`;
    }

    getNowMonth() {
        return `${this.month}`;
    }

    getNowDay() {
        return `${this.day}`;
    }

    getNowHours() {
        return `${this.hours}`;
    }

    getNowMinutes() {
        return `${this.minutes}`;
    }

    getNowSeconds() {
        return `${this.seconds}`;
    }

    getNowMilliseconds() {
        return `${this.milliseconds}`;
    }
}