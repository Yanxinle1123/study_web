// function formatDate(date) {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');
//     const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
//
//     return `${year}年${month}月${day}日  ${hours}时${minutes}分${seconds}.${milliseconds}秒`;
// }

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
        return `${this.year}年${this.month}月${this.day}日  ${this.hours}时${this.minutes}分${this.seconds}.${this.milliseconds}秒`;
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