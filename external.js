//declare global variables
const clearBTN = document.querySelector('.clear');
const negateBTN = document.querySelector('.negate');
const percentBTN = document.querySelector('.percent');
const operationsBTN = Array.from(document.querySelectorAll('.operations'));
const numbersBTN = Array.from(document.querySelectorAll('.numbers'));
const decimalBTN = document.querySelector('.decimal');
const equalsBTN = document.querySelector('.equals');
const currentDisplay = document.querySelector('.display');
const previousDisplay = document.querySelector('.display2');

let currentNum = "";
let previousNum = "";
let operator = null;

// testing the implementation of operations => operationsBTN.forEach(element => console.log(element.textContent));
// math functions


//Event Listener for numbers 
// conditions:>

numbersBTN.forEach( (button) => {
    button.addEventListener('click', (e) => {
        appendNum(button.textContent);
        currentDisplay.value = currentNum;
    })
})

function appendNum(num){
    if(currentNum.length < 7){
        currentNum += num;
    } else {
        return;
    }
}

operationsBTN.forEach( (button) => {
    button.addEventListener('click', (e) => {
        if(previousNum == "" && currentNum == ""){return};
        handleOperator(button.textContent);
        currentDisplay.value = operator;
        previousDisplay.value = previousNum + " " + operator;
    })
})

function handleOperator(op){
    previousOperator = operator;
    operator = op;
    if(previousNum != "" && currentNum != ""){
        operate(previousOperator);
    };
        previousNum = currentNum;
        currentNum = "";
}

decimalBTN.addEventListener('click', (e => {
    addDecimal();
}))

function addDecimal(){
    if(currentNum.includes(".")){
        return;
    } else {
        currentNum += ".";
    }
}

clearBTN.addEventListener('click', (e) => {
    currentDisplay.value = "0";
    previousDisplay.value = "";
    operator = "";
    currentNum = "";
    previousNum = "";
    currentResult = "";
    previousResult = "";
})

equalsBTN.addEventListener('click', (e) => {
    // previousDisplay.value = previousNum + " " + operator + " " + currentNum;
    if(currentNum != "" && previousNum != ""){
        operate(operator);
    }
    currentDisplay.value = previousNum;
    previousDisplay.value = 'Answer : ' + previousNum;
})

//operate function to call math functions

function operate(opr){

    currentNum = Number(currentNum);
    previousNum = Number(previousNum);
    switch(opr){
        case null:
            return;
            break;
        case "+":
            previousNum += currentNum;
            break;
        case "-":
            previousNum -= currentNum;
            break;
        case "*":
            previousNum *= currentNum;
            break;
        case "/":
            previousNum /= currentNum;
            break;
    }
    previousNum = Math.round(previousNum * 1000) /1000;
    currentNum = previousNum;
    previousNum = previousNum.toString();
    currentNum = currentNum.toString();
}


percentBTN.addEventListener('click', (e) => {
    currentNum = (Number(currentNum)/100).toString()
    currentDisplay.value = currentNum;
})

