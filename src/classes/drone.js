import {Vehicle} from './vehicle.js';

export class Drone extends Vehicle {

    constructor(name, age, id) {
        
        super();
        this._id = id;
        this.name = name;
        this.age = age;
    }
    
    get id() {
        return this._id;
    }
}