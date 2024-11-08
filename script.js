//challenge 1
//constructor car
function Car(speed, make) {
    this.make = make;
    this.speed = speed;
}
//prototype method acceleration 
Car.prototype.Acceleration = function() {
    this.speed += 10;
    console.log(`${this.make}'s speed is ${this.speed} km/hr`);
}
//prototype method Brake 
Car.prototype.Brake = function() {
    this.speed -= 5;
    console.log(`${this.make}'s speed is ${this.speed} km/hr`);
}
//instance of class
const car1 = new Car(123, "Toyota");
const car2 = new Car(127, "Honda");

car1.Acceleration();  //acceleration applied to car 1

car2.Acceleration(); //acceleration applied to car 2
car1.Brake(); //Brake applied to car 1
car1.Brake();// again Brake applied to car 1
car2.Brake(); //again Brake applied to car 2



//challenge 3:
class Ev extends Car { //
    constructor(speed, make, charge) {
        super(speed, make); 
        this.charge = charge; 
    }
    // method charge
    ChargeBattery(chargeTo) {
        this.charge=chargeTo
    }
    //overriding method acceleration
    Acceleration(){
        this.speed += 20;
        this.charge-=(0.01*this.charge)
        console.log(`${this.make} is going at ${this.speed} km/hr with a charge of ${this.charge}%`);
        }
    
    

}
//instance of class
const ev1 = new Ev(120, 'Tesla', 70);
ev1.ChargeBattery(90)
console.log(`${ev1.make} is going at ${this.speed} km/hr with a charge of ${this.charge}%`); // Output: 120
ev1.Acceleration(); //override method 
ev1.Brake(); //calling method of parent class

