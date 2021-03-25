export function add(x, y) {
    return x + y;
}
export function subtract(x, y) {
    return x - y;
}
export function divide(x, y) {
    if (x === 0 && y === 0) {
        return 0;
    }
    return x / y;
}
export function multiply(x, y) {
    return x * y;
}
export function enterNumber(input) {
    return Number (input.value);
}