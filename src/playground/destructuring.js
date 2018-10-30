// In ES5, many repetitive code:

var expense = {
    type: 'Business',
    amount: '$45 USD'
}

// var type = expense.type;
// var amount = expense.amont;

// ES6

//======================
// Destructuring objects
//======================

// pulling the property off hte object.
const { type, amount } = expense;
console.log( type, amount )

// Use case of destructuring

var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({name, extension, size}, {color}) {
    return `${color}  The file ${name}.${extension} is of size ${size}` 
    // return `The file ${file.name}.${file.extension} is of size ${file.size}` 
}

console.log(fileSummary(savedFile, { color: 'red' }))

//======================
// Destructuring arrays
//======================

const companies = [
    'Google',
    'Facebook',
    'Uber'
]

const [ name, name2, name3, name4 ] = companies;
console.log(name, name2, name3, name4) // Google Facebook Uber undefined

// Curly brackets -> will try to pull properties of the array
const { length } = companies;
console.log(length) // 3

const [nameK, nameK2, ...rest] = companies;
console.log(nameK, nameK2, rest) // Google Facebook ['Uber']

//=================================
// Destructuring array of objects
//=================================

// const sw_companies = [
//     {name: 'Google', location: 'Mountain View'},
//     {name: 'Facebook', location: 'Menlo Park'},
//     {name: 'Uber', location: 'San Francisco'}
// ]

// // How to pluck location of Google? 
// // ES5:
// const location = sw_companies[0].location

// ES6:
// Two levels of destructuring: (we can mix and match):
// destructuring the array first, to get the first array value, 
// and then destructure the object to get a value of a needed property.
// Smooth!
// const [{location2}] = sw_companies;

const Google = {
    locations: ['Mountain View', 'New York', 'London'],
    workers: [3500, 1600, 2000],
    managers: [500, 200, 300]
};

// Find the key-value pair of the object first, then grab the first element of the array.
const {locations: [ locale ]} = Google;
console.log(locale )
const {locations: [ locale1, locale2 ]} = Google;
console.log(locale1, locale2 )
const { workers: [MVnumber, NYCnumber] } = Google;
console.log(MVnumber, NYCnumber)

// Practical use case: 
// We receive data from an API as an array of arrays (coordinates).

const points = [
    [4, 5],
    [10, 1],
    [0, 40]
]

// How to convert them into an array of objects {x: 4, y: 5} ?

const coords = points.map(([x, y]) => {
    return {x, y}
})

console.log(coords)

//========================
const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

const isEngineer = function isEngineer({title, department}) {
    return (title === 'Engineer' && department === 'Engineering');
}

console.log(isEngineer(profile))

// Return an array of objects
const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher };
});

console.log(classesAsObject)

// Recursion with Destructuring

// Use array destructuring, recursion, and the rest/spread operator
// to create a function 'double' that will return a new array 
// with all values inside of it multiplied by two.
// Do not use any array helpers!

const numbers = [1, 2, 3];

let doubledArray = [];

// This gives an infinite call stack

// function double([number, ...rest]) {
//     console.log(number)
//     while (number !== undefined) {
//         doubledArray.push(number * 2);
//         double([number, ...rest]);
//     }
//     return doubledArray;
// }

console.log(double(numbers))