// create an empty Object
let fridge = {};
fridge.eggs = 20;
fridge.tomotos = '2kg';
console.log(fridge);

// Create fully loaded object
let mobile = {
    color : 'silver',
    brand : 'Apple',
    price : 35000,
    isInsured : false
};

// Access the Object
console.log(mobile);

// Access the existing properties
console.log(`Brand : ${mobile.brand}`); // Apple
console.log(`Price : ${mobile.price}`); // 35000

// Access the non-existing property
console.log(mobile.ramSize); // undefined

// Access the properties with dot , [] notation
console.log(`Color : ${mobile.color}`);
console.log(`Color : ${mobile['color']}`);

// difference between dot , [] notation
let propName = 'price';
console.log(`Dynamic Prop : ${mobile.propName}`); // undefined
console.log(`Dynamic Prop : ${mobile[propName]}`); // 35000

// Nested Object
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    college : 'Osmania Medical College',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);

// Access the Nested Object
console.log(student.address);

// CRUD Operations
let laptop = {
    brand : 'Lenovo',
    color : 'black',
    price : 65000
};

console.log(laptop);

// CREATE
laptop.memory = '2TB';
console.log(laptop);

// READ
console.log(laptop.brand); // Lenovo

// UPDATE
laptop.price = 85000;
console.log(laptop);

// DELETE
delete laptop.color;
console.log(laptop);