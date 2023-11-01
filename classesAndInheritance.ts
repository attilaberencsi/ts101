// Classes represent the structure of an object as well as its functions

/**
 * Super class
 */
class Vehicle {
    protected brand: string;
    private color: string;
    constructor(brand: string, color: string) {
        this.brand = brand;
        this.color = color;
    }
    getBrand(): string {
        return this.brand;
    }
}

/**
 * Child class
 */
class Car extends Vehicle {
    private registrationDate: Date;

    constructor(brand: string, color: string, registrationDate: Date) {
        super(brand, color);
        this.registrationDate = registrationDate;
    }

    getBrand(): string {
        return 'Brand: ' + this.brand;
    }
}

/**
 * Abstract members define what is to be done with a signature
 */
abstract class Candy {
    abstract sugarAmount(): number;

    protected getHi() {
        return 'Hi';
    }
}

/**
 * Child class implementing abstract method contains how it is done
 */
class Chocolate extends Candy {
    sugarAmount(): number {
        return 30000;
    }
}