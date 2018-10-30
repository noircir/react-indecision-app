// var ladders = [
//     { id: 1, height: 70 },
//     { id: 3, height: 20 },
//     { id: 45, height: 30 },
//     { id: 98, height: 35 }
// ]

// const foundItem = findWhere(ladders, { height: 20 })

// console.log(foundItem)

// let computers = [
//     {name: 'Apple', ram: 24},
//     {name: 'Compaq', ram: 4},
//     {name: 'Acer', ram: 32}
// ]

// const allComputersCanRun = computers.every((computer) => {
//     return computer.ram > 16;
// })

// console.log(allComputersCanRun)

// const someComputersCanRun = computers.some((computer) => {
//     return computer.ram > 16;
// })

// console.log(someComputersCanRun)

// function Field(value) {
//     this.value = value;
// }

// Field.prototype.validate = function() {
//     return this.value.length > 0;
// }

// var username = new Field("2cool");
// var password = new Field('my_password');

// var numbers = [10, 20, 30];

// let sum = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0)

// console.log(sum)

// var colors = [
//     {color: 'red'}, 
//     {color: 'yellow'}, 
//     {color: 'blue'}
// ];

// let arrayOfColors = colors.reduce((result, item) => {
//     result.push(item.color);
//     return result
// }, [])

// console.log(arrayOfColors)

// function balancedParens(string) {
//     return !string.split('').reduce((res, char) => {
//         // catching the case of inverted bracket ')(' :
//         // if the string starts with ')', the iteration will run once, turning res = -1
//         if (res < 0) {return res} 
//         if (char === "(") { return ++res} 
//         if (char === ")") { return --res} 
//         // if 'char' is other than '(' or ')', still need to return
//         return res
//     }, 0);
// }

// console.log(balancedParens(")("))

// function unique(array) {
//     return array.reduce((accum, current) => {
//         // if (accum.indexOf(current) < 0) { accum.push(current) }
//         if (!accum.includes(current)) { accum.push(current) }
//         return accum;
//     }, [])
// }


// var numbers = [1, 1, 2, 3, 4, 4]
// // console.log(numbers.find((num) => { return num === 2}))
// let uniqueNumbers = unique(numbers)
// console.log(uniqueNumbers)

const profile = {
    name: 'Alex',
    getName: () => {
        return this.name
    }
};

console.log(profile.getName())