// var vs let
/*
    var supports only function scoping concept
    let supports block and function scoping concept
 */
let course = 'Engineering';
if(course === 'Engineering'){
    let dept_1 = 'Software';
    var dept_2 = 'Govt';
}
// console.log(dept_1); //  ReferenceError: dept_1 is not defined
console.log(dept_2); // Govt becoz its var

// var vs let with for-loop
for(var i = 0; i<=10; i++){

}
console.log(i); // 11

// var vs let with function
let greet = () => {
    let msg_1 = 'Good Morning';
    var msg_2 = 'Good Afternoon';
};
greet();
// console.log(msg_1); // ReferenceError: msg_1 is not defined
// console.log(msg_2); // ReferenceError: msg_2 is not defined

// let vs const
const empName = 'John';
// empName = 'Wilson'; // TypeError: Assignment to constant variable
console.log(empName);

// const with object
const mobile = {
    brand : 'Apple',
    color : 'silver',
    price : 35000
};
mobile.color = 'black';
console.log(mobile);

// const  with functions
const wishMe = (name) => {
    let msg = `Good Morning ${name}`;
    return msg;
};
let theMessage  = wishMe('John');
console.log(theMessage);

// const with Array
const colors = ['white','black','orange'];
colors.push('red');
console.log(colors);

