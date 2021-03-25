// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide, enterNumber} from './calculator.js';
const test = QUnit.test;

test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
   
    const x = 11;
    const y = 2;
    const expected = 13;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('subtract function', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 9;
    const actual = subtract(x, y);
    expect.equal(actual, expected);
});
test('divide function', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 5.5;
    const actual = divide(x, y);
    expect.equal(actual, expected);
});
test('multiply function', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 22;
    const actual = multiply(x, y);
    expect.equal(actual, expected);
});
test('0 divide by 0 function', (expect) => {
    const x = 0;
    const y = 0;
    const expected = 0;
    const actual = (x, y);
    expect.equal(actual, expected);
});
test('input function', (expect) => {
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;
    const actual = enterNumber(input);
    expect.equal(actual, expected);
});
test('empty function', (expect) => {
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;
    const actual = enterNumber(input);
    expect.equal(actual, expected);
});
