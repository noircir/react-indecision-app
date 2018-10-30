// numbers are not in array

function addNumbers(...numbers){
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(addNumbers(1,2,3,4,5))

const defaultColors = ['red', 'green']
const userFavoriteColors = ['orange', 'yellow']
const fallColors = ['fire red', 'fall orange']

// Easier to see what is going on, instead of 'concat'
console.log(['green', 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors])

// Here, the argument is NOT an array (doesn't have to be), but we return an array

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items]
    }
    return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'))

// You are developing an open-source library, but months later receive a lot of
// complaints that 'calculateProduct' is a non-descriptive name. 
// You want to change the name to 'multiply', but are aware that this move 
// may break tons of existing code that has already incorporated your library.

const MathLibrary = {
    // Rest and spread operators are useful for passing arguments 
    // between functions, not worrying about specific number of arguments.
    
    calculateProduct(...rest) {
        console.log('Please use the \'multiply\' method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
}

console.log(MathLibrary.calculateProduct(5,4));

function product(...numbers) {
    var numbers = [...numbers];

    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}

function join(array1, array2) {
    return [...array1, ...array2];
}

function unshift(array, ...rest) {
    return [...rest, ...array];
}

