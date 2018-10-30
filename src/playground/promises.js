let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000);
});

promise
.then(() => console.log('finally finished!!'))
.then(() => console.log('I was also ran!!!'))
.catch(() => console.log('uh oh!'))

const url = 'https://jsonplaceholder.typicode123.com/posts12345/'
fetch(url)
// .then(response => response.json())
// .then((data) => console.log(data))
.then(response => console.log(response))
.catch(error => console.log('BAD', error));  // will never execute execute, 
// because even with error, it is still a result with 404 status.