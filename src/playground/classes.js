// function Car(options) {
//     this.title = options.title;
// }

// Car.prototype.drive = function() {
//     return 'vroom'
// }

// //===========================
// // Inheritance before ES6:
// //===========================

// function Toyota(options) {
//     Car.call(this, options);
//     this.color = options.color;
// }
// // Declare first that Toyota prototype is going to be the same as Car prototype
// Toyota.prototype = Object.create(Car.prototype);
// // to create toyotas later or to become an ancestor constructor
// // for further inheritance
// Toyota.prototype.constructor = Toyota;

// Toyota.prototype.honk = function() {
//     return 'beep';
// }



// const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });

// // console.log(car.drive())
// console.log(toyota);
// console.log(toyota.honk());
// console.log(toyota.drive());



//===========================
// Inheritance with ES6:
//===========================

class Car {
    // deconstructing options.title, options.color etc.
    // But could pass 'options' and then this.title = options.title;
    constructor({title}) {
        this.title = title;
    }
    drive() {
        return 'vroom';
    }
}

const car = new Car({ title: 'Toyota'});
console.log(car)
console.log(car.drive());

// passing not destructured options but the whole options object
class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }
    honk() {
        return 'beep';
    }
}

const toyota = new Toyota({color: 'red', title: 'Daily  Driver'});
console.log(toyota)
console.log(toyota.honk())
console.log(toyota.drive())

