import {Vehicle} from './vehicle.js';

export class Drone extends Vehicle {

   constructor(license, type) {
        super(license, type);
        this.airTime = null;
    }
}