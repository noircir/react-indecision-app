'use strict';

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject();
    }, 3000);
});

promise.then(function () {
    return console.log('finally finished!!');
}).then(function () {
    return console.log('I was also ran!!!');
}).catch(function () {
    return console.log('uh oh!');
});

var url = 'https://jsonplaceholder.typicode123.com/posts12345/';
fetch(url)
// .then(response => response.json())
// .then((data) => console.log(data))
.then(function (response) {
    return console.log(response);
}).catch(function (error) {
    return console.log('BAD', error);
}); // will never execute execute, 
// because even with error, it is still a result with 404 status.
