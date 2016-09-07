import {Animal} from './animal.js';

export class Human extends Animal {

    constructor(name, age) {
        
        super();
        this.name = name;
        this.age = age;
    }
}