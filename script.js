let display = document.getElementById("display");
let currentInput="";
let previousInput="";
let operator=null;

cancelAll=()=>{
    currentInput="";
    previousInput="";
    operator=null;
    display.value="0";
}
removeLast=()=>{
    currentInput= currentInput.slice(0,-1);
    display.value=currentInput || "0";
}
operatorNum=(num)=>{
    currentInput+=num;
    display.value=currentInput;
}
dotOperator = () => {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        display.value = currentInput;
    }
}
add = () => {
    if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = "+";
    }
}
subtract = () => {
    if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = "-";
    }
}

multiply = () => {
    if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = "*";
    }
}
divide = () => {
    if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = "/";
    }
}
equalTo = () => {
    if (previousInput !== "" && currentInput !== "") {
        let result;
        let a = parseFloat(previousInput);
        let b = parseFloat(currentInput);

        switch (operator) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = a / b;
                break;
            default:
                return;
        }

        display.value = result;
        currentInput = result;
        previousInput = "";
        operator = null;
    }
}