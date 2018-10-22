class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return(`${this.name} is ${this.age} year(s) old.`)
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description
    }
    hasMajor() {
        return !!this.major
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        return !!this.homeLocation ? `Hi. I'm ${this.name}. I'm visiting from ${this.homeLocation}.` : `Hi. I'm ${this.name}.`
    }
}

const anna = new Traveller('Anna', 45, 'Edmonton')
console.log(anna.getGreeting())

const me = new Traveller('Walter White', 51)
console.log(me.getGreeting())
// console.log(me.hasMajor())


const anon = new Student()
console.log(anon.hasMajor())