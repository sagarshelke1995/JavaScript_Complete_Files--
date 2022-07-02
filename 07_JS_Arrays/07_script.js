// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Create an Array
let array = ['test',100,true , undefined , null , [10 , 20] , { name : 'John'}];
console.log(array);

// Access the elements
console.log(array[6]); // {name : 'John'}

console.log(array[7]); // undefined

/*
shift() -> to remove the first element
unshift() -> to add a first element
pop() -> to remove the last element
push() -> to add the last element
sort() -> to sort the array elements
reverse() -> to reverse the array elements
splice() -> to remove an element in the middle
slice() -> to create a new copy of an array
join() -> to join the array elements to string
split() -> to split a string to array elements
filter() -> to filter an array with some condition
find() -> to find a particular element with condition
 */

// shift() -> to remove the first element
let technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- shift() -------------');
console.log(technologies);
technologies.shift();
console.log(technologies);

// unshift() -> to add a first element
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- unshift() -------------');
console.log(technologies);
technologies.unshift('NODE JS');
console.log(technologies);

// pop() -> to remove the last element
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- pop() -------------');
console.log(technologies);
technologies.pop();
console.log(technologies);

// push() -> to add the last element
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- push() -------------');
console.log(technologies);
technologies.push('NODE JS');
console.log(technologies);

// sort() -> to sort the array elements
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- sort() -------------');
console.log(technologies);
technologies.sort();
console.log(technologies);

// reverse() -> to reverse the array elements
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- reverse() -------------');
console.log(technologies);
technologies.reverse();
console.log(technologies);

// Reverse Sort
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- reverse() -------------');
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

// splice(index) -> to remove all the elements from the given index
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- splice(index) -------------');
console.log(technologies);
technologies.splice(2);
console.log(technologies);

// splice(index,no of elements) -> to remove the no of elements from the given index
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- splice(index, no of elements) -------------');
console.log(technologies);
technologies.splice(0,2);
console.log(technologies);

// splice(index,1,replace element) -> to remove the no of elements from the given index
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- splice(index,1,replace element) -------------');
console.log(technologies);
technologies.splice(4,1,'NODE JS');
console.log(technologies);

// join() -> to join the array elements to string
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- join() -------------');
console.log(technologies);
let str = technologies.join(' - ');
console.log(str);

// split() -> to split a string to array elements
technologies = ['HTML','CSS','JAVASCRIPT', 'JQUERY' , 'BOOTSTRAP'];
console.log('----------------------- join() -------------');
console.log(str);
let newTechs = str.split(' - ');
console.log(newTechs);

// slice() to create a new copy of an array
let array1 = [10,20,30,40,50];
let array2 = array1.slice();
array1.splice(2);
console.log(array2);

// Length -> access the length of array
console.log(`Length : ${technologies.length}`);

// Loop an Array
let colors = ['WHITE','BLACK','ORANGE','RED','BLUE','PURPLE'];
let result = '';
for(let i=0; i< colors.length; i++){
    result += `${colors[i]} `;
}
console.log(result);

// for-in Loop ES5
result = '';
for(let index in colors){
    result += `${colors[index]} `;
}
console.log(result);

// for-of loop ES6
result = '';
for(let color of colors){
    result += `${color} `;
}
console.log(result);

// forEach Function ES5
result = '';
colors.forEach(function(color) {
    result += `${color} `;
});
console.log(result);

// forEach with Arrow Function
result = '';
colors.forEach(color => result += `${color} `);
console.log(result);

// filter()
let employees = [
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'John',
        age : 45,
        designation : 'Sr. Manager',
        active : false
    },
    {
        name : 'Wilson',
        age : 50,
        designation : 'Chief Technical Officer',
        active : true
    },
    {
        name : 'Laura',
        age : 23,
        designation : 'Software Trainee',
        active : false
    }
];

// Normal Way
let juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// filter function
let juniorEmps = employees.filter((employee) => {
    return employee.age <= 30;
});
console.log(juniorEmps);

// Senior Employees
let seniorEmployees = employees.filter((employee) => {
    return employee.age > 30;
});
console.log(seniorEmployees);

// Active , inactive employees
// Male , Female