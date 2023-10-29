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

type Programmer = {
    name: string;
    knownFor: string[];
};

type Consultant = {
    name: string[];
    skills: string[];
};

type User = {
    name: string[];
    apps: string[];
};

// UNION and INTERSECTION
// Whether an intersection or a union type is used, the order in which the individual types are defined is irrelevant.

// Intersection type: merging two or more different types into a new type
// but the type of the properties with identical name must match, see
// https://stackoverflow.com/questions/42735611/why-can-intersection-types-contain-conflicting-types
type ProgCons = Consultant & Programmer;

// Wrong, due above explanation
/* 
const technoFunc: ProgCons = {
    name: ["Pappa"],
    knownFor: ['Music'],
    skills: ['DJing']
}; */

// Good, due above explanation
type ConsUser = Consultant & User;


// Union type: used to define that a value can be any one of several types 
type ProgORCons = Consultant | Programmer;
