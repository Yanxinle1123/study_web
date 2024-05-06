function calculator(text) {
    return eval(text);
}

function calculator2(id) {
    try {
        alert(`计算结果为: ${calculator(getTextBoxValue(id))}`);
    } catch {
        alert("计算错误");
    }
}