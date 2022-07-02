// function declaration
function printNumbers(startNumber , endNumber , increNumber) {
    let result = '';
    for(let i= startNumber; i<= endNumber; i+= increNumber){
        result += `${i} `;
    }
    console.log(result);
}
// function call
printNumbers(0 , 20 , 2);




// function without arguments
function greet() {
    console.log('Good Morning');
}
greet();

// Function with arguments
function checkQualify(marks) {
    if(marks <= 35){
        console.log('You Failed the Exam');
    }
    else{
        console.log('You Cleared the Exam');
    }
}
checkQualify(25); // failed
checkQualify(85); // cleared

// function with return Type
function sum(a , b) {
    let add = a + b;
    return add;
}
let addition = sum(10,20);

let calc = (addition) => {
    let result = (2 * addition) + (3 * addition);
    console.log(result);
};
calc(addition);

// Function Expression
let wishMe = function(name) {
    return `Good Morning ${name} `;
};
console.log(wishMe('John'));

// function with more/ less arguments
let wishMeArgs = function(name , age) {
    console.log(`Hello ${name} You are ${age} yrs Old`);
};
wishMeArgs('John');

// Object as an arguments
let student1 = {
    name : 'Rajan',
    age : 23,
    course : 'Engineering'
};
let printObject = function(object) {
    console.log(`Name : ${object.name}
                 Age : ${object.age}
                 Course : ${object.course}`);
};
printObject(student1);
printObject({
    name : 'Rajan',
    age : 23,
    course : 'Engineering'
});

// Array as an arguments
let technologies = ['html' , 'css' , 'Javascript', 'jquery'];
let printArray = function(array) {
    let tempString = '';
    for(let index in array){
        tempString += `${index} => ${array[index]} \n`;
    }
    console.log(tempString);
};
printArray(technologies);
printArray(['white','red','blue','orange','purple']);

// Function inside an Object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

// function inside an array
let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Manager'
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer'
    },
    function() {
        return 'Im a function from array';
    }
];
console.log(employees[2]());

// Nested Functions
let outerFn = function() {
    let innerFn = function() {
       console.log('Iam from inner Function');
    };
    innerFn();
    console.log('Iam from Outer Function');
};
outerFn();

// Arrow Function ES6
let calculate = (num1 , num2) => {
    let output = (2 * (num1 + num2)) + ( 3 * (num2 - num1));
    return output;
};
console.log(calculate(10,20));

