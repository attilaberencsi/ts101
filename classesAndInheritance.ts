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

    protected getHi(){
        return 'Hi';
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
 * Abstract class defines what is to be done with a signature
 */
abstract class Candy {
    abstract sugarAmount(): number;
}

/**
 * Child class implementing abstract method contains how it is done
 */
class Chocolate extends Candy {
    sugarAmount(): number {
        return 30000;
    }
}