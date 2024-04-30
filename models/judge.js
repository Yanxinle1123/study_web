function judgeTextBoxNumber(elementId) {
    const value = document.getElementById(elementId).value.trim();
    if (value === "" || isNaN(value)) {
        alert("不是数字");
    } else {
        alert("是数字");
    }
}