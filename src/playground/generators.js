// const numbers = [1,2,3,4]
// let total = 0;
// for (let number of numbers) {
//     total += number;
// }

// console.log(total)

// function* numbers() {
//     yield;
// }

// // console.log(numbers())

// const gen = numbers();
// gen.next();

// gen.next();


// generator function - declared with *
// function* generator() {
//     yield 'wow';
//     yield 'this';
//     yield 'is';
//     yield 'sweet';
// }

// // create and iterator object
// let iterator = generator();

// iterator.next();
// iterator.next();
// iterator.next();
// iterator.next();

// //=======================

// const testingTeam = {
//     lead: 'Amanda',
//     tester: 'Bill'
// }

// const engineeringTeam = {
//     testingTeam,
//     size: 3,
//     department: 'Engineering',
//     lead: 'Jill',
//     manager: 'Alex',
//     engineer: 'Dave'
// };

// How to iterate through the testing team, as well?

// function* TeamIterator(team) {
//     yield team.lead;
//     yield team.manager;
//     yield team.engineer;
//     const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
//     // "There is another generatior, you might want to look at it, too."
//     // Falling through the trap door.
//     // Generator delegation in practice.
//     yield* testingTeamGenerator;
// }

// function* TestingTeamIterator(team) {
//     yield team.lead;
//     yield team.tester
// }

// // Two iterators, but how to iterate through both teams? 
// // How to combine the two generators?


// const names = [];
// for (let name of TeamIterator(engineeringTeam)) {
//     names.push(name);
// }

// console.log(names);

//===========================================
// Refactor the code to use Symbol.iterator.
//===========================================

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;

    }
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave', 
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam // generator delegation
    }
};

const names = [];
for (let name of engineeringTeam) {
    names.push(name);
}

console.log(names);
