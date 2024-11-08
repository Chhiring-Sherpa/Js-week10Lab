class CarCl {
    //constructor
    constructor(speed, make) {
        this.speed = speed;
        this.make = make;
    }

    // Getter for SpeedUS
    get SpeedUS() {
        return this.speed/1.6;
    }

    // Setter for SpeedUS
    set SpeedUS(speed) {
        this.speed = speed;
    }
    //method Acceleration
    Acceleration(){
        this.speed += 10;
        console.log(`${this.make}'s speed is ${this.speed} km/hr`);
    }
    //method brake 
    Brake = function() {
        this.speed -= 5;
        console.log(`${this.make}'s speed is ${this.speed} km/hr`);
    }
    
}

const car1 = new CarCl(120, 'Toyota'); // create a new Car object with speed 120 and make 'Toyota'
console.log(`${car1.SpeedUS} miles/hour`); //using getter to get the speed
car1.Acceleration();  //acceleration applied
car1.Brake() //brake applied
car1.SpeedUS=100; //using setter
console.log(`the speed of ${car1.make} ${car1.speed} is km/h`) //accessing the speed property directly
console.log(`the speed of ${car1.make} is ${car1.SpeedUS} miles/hour`); //km to miles
console.log(car1.speed); 




