import {Vehicle} from './vehicle.js';

export class Car extends Vehicle {

    constructor(license, type) {
        super(license, type);
        this.miles = null;
    }
}