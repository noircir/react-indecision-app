'use strict';

// argument object - no longer bound with arrow functions

var add = function add(a, b) {
    // Regular function has access to all arguments passed
    console.log(arguments);
    return a + b;
};
console.log(add(55, 11, 1001));

var add2 = function add2(a, b) {
    // Not for arrow function.
    // console.log(arguments)
    return a + b;
};
console.log(add2(55, 11, 1001));

// this keyword - no longer bound

var user = {
    name: 'Bob',
    cities: ['NYC', 'Zurich', 'Paris'],
    // function on a property is bound to the object
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // map method instead of forEach
        // the difference: 'map' transforms into another array

        // First return in return of the function; second return is the new array
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // console.log(this.name)
        // console.log(this.cities)
        // // function not on a property is not bound to 'this'
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
