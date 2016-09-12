import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './dataError.js';

export class DataService {
    
    constructor() {
        
        // to hold the results
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }
    
    getCarByLicense(license) {
        
        this.cars.find(function(car) {
              return car.license === license;         
        });
    }
    
    // load data from data file
    loadData(data) {
        
        for (let row of data) {
            
            switch(row.type) {
                
                case 'car':
                    if (this.validateCar(row)) {
                        let car = this.loadCar(row);
                        this.cars.push(car);
                    } else {
                        
                    }
                    break;
                
                case 'drone':
                    let drone = this.loadDrone(row);
                    this.drones.push(drone);
                    break;
                
                default:
                    let err = new DataError ('Invalid type', row);
                    this.errors.push(err);
                    break;
            }
        }
    }
    
    // assign car attributes from the results
    loadCar(car) {
        
        try {
            let c = new Car(car.license, car.type);        
            c.miles = car.miles;       
            return c;
            
        } catch (e) {   
            let err = new DataError('Car data loading error', car);z
            this.errors.push(err);
        }
        return null;
    }
    
    // assign drone attribites from the results
    loadDrone(drone) {
        
        try {
            let d = new Drone(drone.license, drone.type);        
            d.miles = drone.airTime;       
            return d;
        } catch (e) {
            let err = new DataError('Drone data loading error', drone);
            this.errors.push(err);
        }
        return null;
    }
    
    // validate car row
    validateCar(car) {
        
        let hasError = false;
        let requiredFields = 'license type'.split(' ');
        
        for(let field of requiredFields) {

            if (!car[field]) {
                let err = new DataError('Required fields does not exists', car);
                this.errors.push(err);
                hasError = true;
            }           
        }        
        return !hasError; 
    }
}