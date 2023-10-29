"use strict";
// Anonymus function
let fnAnonymous = function (arg) {
    console.log(arg);
};
// Arrow function
let sum = (a, b) => {
    return a + b;
};
let sumMoreSimple = (a, b) => a + b;
// Rest parameters
function print(...vehicles) {
    console.log(vehicles);
}
print('Audi', 'BMW', 'VW');
print('Ford');
print('');
function add(a, b) {
    return a + b;
}
add(3, 5); // returns 8
add('Hello ', 'World'); // returns "Hello World"
// Static members
class MathUtil {
    static square(a) {
        return a * a;
    }
}
MathUtil.PI = 3.141592;
let PI = MathUtil.PI;
let result = MathUtil.square(3);
