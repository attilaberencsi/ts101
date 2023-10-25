// Anonymus function
let fnAnonymous = function (arg: string) {
    console.log(arg);
}

// Arrow function
let sum = (a: number, b: number): number => {
    return a + b;
}

let sumMoreSimple = (a: number, b: number): number => a + b;

// Rest parameters
function print(...vehicles: string[]) {
    console.log(vehicles);
}

print('Audi', 'BMW', 'VW');
print('Ford');
print('');

// Function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

add(3, 5); // returns 8
add('Hello ', 'World'); // returns "Hello World"

// Static members
class MathUtil {
    static PI: number = 3.141592;
    static square(a: number): number {
        return a * a;
    }
}
let PI = MathUtil.PI;
let result = MathUtil.square(3);

// Intersection type


// Union type