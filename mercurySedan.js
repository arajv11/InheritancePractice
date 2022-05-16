const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = true;
        this.miles = 10000;
    }

    loadPassenger() {
        if (this.passenger <= this.maximumPassengers) {
            console.log("Enough space");
        } else {
            console.log("Not enough space");
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("Vehicle started")
        } else {
            console.log("Vehicle not started");
        }
    }

    scheduleMaintenance() {
        if (this.miles > 30000) {
            console.log("Maintenance needed");
        } else {
            console.log("No maintenance needed");
        }
    }
}

let v = new Car("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v);
v.loadPassenger();
v.start();
v.scheduleMaintenance();