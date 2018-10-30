function createBookshop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0)
        },
        priceForTitle(title) {
            return this.inventory.find((book) => book.title === book.price);
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 }
];

const myShop = createBookshop(inventory);
console.log(myShop.inventoryValue());


// function saveFile() {
//     // $.ajax({method: 'POST', url: url, data:data});
//     $.ajax({ 
//         url, 
//         data,
//         method: 'POST',
//     });
// }

// const url = 'http://fileupload.com';
// const data = {color: 'red'};

// saveFile(url, data);

function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 99999999;
}

// provide a convenience method so the library can be used directly
// i.e., if we expose 'createAdminUser' method, ppl don;t have to 
// at first create user, etc.

// This is ES6 default argument value

function createAdminUser(user = new User( generateId()) ) {

    user.admin=true;
    return user;
}

console.log(createAdminUser());