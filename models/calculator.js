function calculator(text) {
    alert("开始执行calculator()");
    try {
        return eval(text);
    } catch {
        alert("错误");
    }
}

function calculator2(id) {
    alert("开始执行calculator2()");
    return calculator(getTextBoxValue(id));
}