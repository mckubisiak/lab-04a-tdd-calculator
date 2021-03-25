/* eslint-disable no-console */
// import functions and grab DOM elements
import { add, subtract, multiply, divide, enterNumber } from './test/calculator.js';

function doMath(firstnumId, secondnumId, pressId, numsmathId, operation) {
    const firstInput = document.getElementById(firstnumId);
    const secondInput = document.getElementById(secondnumId);
    const Pressed = document.getElementById(pressId);
    const mathOutput = document.getElementById(numsmathId);
    
    
    Pressed.addEventListener('click', () => {
        const number1 = enterNumber(firstInput);
        const number2 = enterNumber(secondInput);

        const sum = operation(number1, number2);
        mathOutput.textContent = sum;
    });
    
}

doMath('first-num', 'second-num', 'add-nums', 'nums-math', add);
doMath('first-num', 'second-num', 'subtract-nums', 'nums-math', subtract);
doMath('first-num', 'second-num', 'multiply-nums', 'nums-math', multiply);
doMath('first-num', 'second-num', 'divide-nums', 'nums-math', divide);


// initialize state

// set event listeners to update state and DOM
// add elements
// add listener
const firstInput = document.getElementById('first-num');
const secondInput = document.getElementById('second-num');
// const addPressed = document.getElementById('add-nums');
const mathOutput= document.getElementById('nums-math');

// addPressed.addEventListener('click', () => {
//     const number1 = enterNumber(firstInput);
//     const number2 = enterNumber(secondInput);
//     const sum = add(number1, number2);
//     mathOutput.textContent = sum;
// });
// // subtract elements
// subtract listener
// const subtractPressed = document.getElementById('subtract-nums');

// subtractPressed.addEventListener('click', () => {
//     const number1 = enterNumber(firstInput);
//     const number2 = enterNumber(secondInput);
//     const sum = subtract(number1, number2);
//     mathOutput.textContent = sum;
// });


// multiple elements
// multiple listener

// const multiplyPressed = document.getElementById('multiply-nums');

// multiplyPressed.addEventListener('click', () => {
//     const number1 = enterNumber(firstInput);
//     const number2 = enterNumber(secondInput);
//     const sum = multiply(number1, number2);
//     mathOutput.textContent = sum;
// });
// // divide elements
// // divide listener
// const dividePressed = document.getElementById('divide-nums');
// dividePressed.addEventListener('click', () => {
//     const number1 = enterNumber(firstInput);
//     const number2 = enterNumber(secondInput);
//     const sum = divide(number1, number2);
//     mathOutput.textContent = sum;
// });

const resetPressed = document.getElementById('reset-nums');
resetPressed.addEventListener('click', () => {
    mathOutput.textContent = '0';
    firstInput.value = '';
    secondInput.value = '';
});