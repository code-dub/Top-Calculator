// #1 functions for basic math -> Addition, Subtraction, Multiplication and Division

function add(intA, intB){
    return intA + intB;
}

function subtract(intA, intB){
    return intA - intB;
}

function multiply(intA, intB){
    return intA * intB;
}

function div(intA, intB){
    return (intA / intB);
}

// #2 Calculator operation -> three Variables - 2 numbers and 1 operator;

let numA = 0;
let numB = 0;
let operator = '';

// #3 Operate function with 3 arguments -> 2 numbers and 1 operator

function operate(intA, operand, intB){
    let opResult = 0;
    switch (operand){
        case '+':
            opResult = intA + intB;
            break;
        case '-':
            opResultesult = intA - intB;
            break;
        case '*':
            opResult = intA * intB;
            break;
        case '/':
            opResult = intA / intB;
            break;   
    }
    return opResult;
}

