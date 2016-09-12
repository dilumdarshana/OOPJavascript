import {Drone} from './classes/drone.js';
import {Car} from './classes/car.js';
import {DataService} from './services/dataService.js';
import {data} from './data.js';


let dataServiceObj = new DataService ();

dataServiceObj.loadData(data);

// get car by license
let car = dataServiceObj.getCarByLicense('AD1202');

console.log(car);

for (let err of dataServiceObj.errors) {
    console.log (err.message);
}