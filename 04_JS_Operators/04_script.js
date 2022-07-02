// Assignment operator =
let name = 'Naveen';
console.log(name);

// Arithmetic operators + - * /
let num1 = 10;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let add = 0;
add = add + (a + b); // 0 + 10 + 20 = 30
add  += (a + b); // 30 + 10 + 20 = 60
console.log(add); // 60

// Conditional operators < , > , <= , >= , !==
let marks = 75;
if(marks <= 35){
    console.log('You failed the Exam');
}
else{
    console.log('You Cleared the Exam');
}

// Unary Operator ++ , --
let x = 10;
x = x + 1;
x += 2;
x--;
console.log(x);

// Logical operators AND , OR
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until parents Agreed');
}

// String Concatenation Operator
let empName = 'John';
let empAge = 40;
console.log(empName + " " + empAge);
console.log(`${empName} ${empAge}`);

// Ternary operator (? :)
marks = 75;
(marks <= 35) ? console.log('You failed the Exam') : console.log('You Cleared the Exam');

// Type of operator
let test = 'Wilson';
console.log(`Value : ${test} Type : ${typeof  test}`);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}