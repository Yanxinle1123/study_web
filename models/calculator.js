function calculator(text) {
    return eval(text.replace(/\b0+(\d+)/g, '$1'));
}

function calculator2(id) {
    try {
        const result = calculator(getTextBoxValue(id));
        if (result === undefined) {
            alert("计算错误");
        } else {
            alert(`计算结果为: ${result}`);
        }
    } catch {
        alert("计算错误");
    }
}