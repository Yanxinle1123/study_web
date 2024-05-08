class ShowPopup {
    constructor(type, text, defaultvalue = undefined, show_result = false) {
        this._type = type;
        this._text = text;
        this._defaultvalue = defaultvalue;
        this._show_result = show_result;
    }

    show() {
        switch (this._type) {
            case "alert":
                alert(this._text);
                break;
            case "confirm":
                const confirm_result = confirm(this._text);
                if (this._show_result === true) {
                    if (confirm_result === true) {
                        alert("你选择了确定");
                        return confirm_result;
                    } else {
                        alert("你选择了取消");
                        return confirm_result;
                    }
                } else {
                    return confirm_result;
                }
            case "prompt":
                const prompt_result = prompt(this._text, this._defaultvalue);
                if (this._show_result === true) {
                    if (prompt_result === null) {
                        alert("你取消了输入框");
                        return prompt_result;
                    } else {
                        alert(`你输入了${prompt_result}`);
                        return prompt_result;
                    }
                }
                return prompt_result;
            default:
                alert("未知的弹窗类型");
        }
    }
}

// new ShowPopup("confirm", "这是一个选择框", null, true).show();