"use strict";
/**
 * Super class
 */
class Vehicle {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    getBrand() {
        return this.brand;
    }
    getHi() {
        return 'Hi';
    }
}
/**
 * Child class
 */
class Car extends Vehicle {
    constructor(brand, color, registrationDate) {
        super(brand, color);
        this.registrationDate = registrationDate;
    }
    getBrand() {
        return 'Brand: ' + this.brand;
    }
}
/**
 * Abstract class defines what is to be done with a signature
 */
class Candy {
}
/**
 * Child class implementing abstract method contains how it is done
 */
class Chocolate extends Candy {
    sugarAmount() {
        return 30000;
    }
}
