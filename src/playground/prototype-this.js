function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log("baz");
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log("bar");
    foo(); // <-- call-site for `foo`

}

function foo() {
    debugger
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log("foo");
}

baz();

// function foo(num) {
//     console.log("foo: " + num);

//     // keep track of how many times `foo` is called
//     foo.count++;
//     console.log('foo.count ' + foo.count)
// }

// foo.count = 0;

// var i;

// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//     }
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9

// // how many times was `foo` called?
// console.log(foo.count); // 0 -- WTF?


// function identify() {
//     return this.name.toUpperCase();
// }

// function speak() {
//     const greeting = "Hello, I'm " + identify.call(this);
//     console.log(greeting);
// }

// const me = {
//     name: "Kyle"
// };

// const you = {
//     name: "Reader"
// };

// console.log(identify.call(me)); // KYLE
// console.log(identify.call(you)); // READER

// speak.call(me); // Hello, I'm KYLE
// speak.call(you); // Hello, I'm READER

// function identify(context) {
//     return context.name.toUpperCase();
// }

// function speak(context) {
//     var greeting = "Hello, I'm " + identify(context);
//     console.log(greeting);
// }

// const me = {
//     name: "Kyle"
// };

// const you = {
//     name: "Reader"
// };

// console.log(identify(you)) // READER
// speak(me); // Hello, I'm KYLE