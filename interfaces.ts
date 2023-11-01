/**
 * An interface is only used to represent the structure of an object,
 * so specifies which properties or methods a class must contain in a later instance.
 * Unlike classes, interfaces aren’t converted into JavaScript code by the compiler.
 * Interfaces, on the other hand, are used for type checking.
 * This is also referred to as duck typing or structural typing.
 */
interface IVehicle {
    brand: string;
    color: string;
    getMileage: () => number;
    getBrand(): string;
}


class Truck implements IVehicle {
    brand: string;
    color: string;

    constructor() {
        this.brand = "KIA";
        this.color = "IceBerg"
    }

    getMileage() {
        return 1000;
    }

    getBrand(): string {
        return this.brand;
    }
}

/**
 * Interface for type definitions and validations including mandatory properties
 */
interface MessageStatus {
    status: string;
    message: string;
}

let msg1: MessageStatus = { status: 'OK', message: 'Ok!' };
/* let msg2: MessageStatus = {status: 'NOK', msg: 'Not ok!'};
let msg3: MessageStatus = {status: 1, message: 'Not ok!'};
let msg4: MessageStatus = {status: 'NOK'}; */



/**
 * Interface as function type
 */

// type StatusMessage = (status: string, message: string) => void;

interface StatusMessage {
    (status: string, message: string): void;
}

function print(status: string, message: string): void {
    console.log('Status=' + status + ', message=' + message);
}

let processor: StatusMessage = print;

/**
 * Interface as array type
 * Type of the index can also be defined
 */
interface IArrayString {
    [index: string]: string;
}

let arrStr: IArrayString = {};
arrStr['OK'] = 'Ok!';
arrStr['NOK'] = 'Not ok!';


/**
 * Interface with optional properties, like errorCode
 */
interface MessagingStatus {
    status: string;
    message: string;
    errorCode?: string;
}

let success: MessagingStatus = {
    status: 'OK',
    message: 'Ok!'
};

let error: MessagingStatus = {
    status: 'NOK',
    message: 'Not ok!',
    errorCode: '500'
};

/**
 * Interface with read-only properties, like 
 * To ensure that a property can only be assigned a value once,
 * which can then no longer be changed
 */
interface Person {
    name: string;
    readonly birthday: string;
}

let pers: Person = { name: 'Max', birthday: '2000-01-01' };

pers.name = 'Max II';
// pers.birthday = '2000-02-02'; //<===uncomment to see syntax error here