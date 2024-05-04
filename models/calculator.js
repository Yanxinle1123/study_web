function calculator(text) {
    try {
        eval(text);
    } catch {
        alert("错误");
    }

}