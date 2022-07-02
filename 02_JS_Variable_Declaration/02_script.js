let num1 = 100;
let num2 = 456;
let sum = num1 + num2;
console.log('The Sum of ' + num1 + ' , ' + num2 + ' is : ' + sum); // ES5
console.log(`The Sum of ${num1} , ${num2} is : ${sum}`); // ES6

// Rules to declare variables
// 1) JS is case sensitive
let name = 'John';
let Name = 'Rajan';
console.log(Name); // Rajan

// 2) Camel Case letters for variables
let empName = 'Mahesh';
console.log(empName); // Mahesh

// 3) a - z , A - Z , 0 - 9 , _ , $ allowed
let _name = 'Laura';
console.log(_name); // Laura

// 4) max 10 char
let courseName = 'JavaScript';
console.log(courseName);

// 5) Redeclaration of variables is not allowed
let advCourseName = 'Node JS';
console.log(advCourseName);
