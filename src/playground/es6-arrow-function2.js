// argument object - no longer bound with arrow functions

const add = function (a, b) {
    // Regular function has access to all arguments passed
    console.log(arguments)
    return a + b
}
console.log(add(55, 11, 1001))

const add2 = (a, b) => {
    // Not for arrow function.
    // console.log(arguments)
    return a + b
}
console.log(add2(55, 11, 1001))

// this keyword - no longer bound

const user = {
    name: 'Bob',
    cities: ['NYC', 'Zurich', 'Paris'],
    // function on a property is bound to the object
    printPlacesLived() {
        // map method instead of forEach
        // the difference: 'map' transforms into another array

        // First return in return of the function; second return is the new array
        return this.cities.map((city) => this.name + ' has lived in ' + city)

        // console.log(this.name)
        // console.log(this.cities)
        // // function not on a property is not bound to 'this'
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())