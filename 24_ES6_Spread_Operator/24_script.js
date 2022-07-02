let numbers = [50 , 30 , 85 , 45, 879, 194, 5 , 6516, 19, 61, 874];
let minNumber = numbers[0];
for(let index in numbers){
    if(numbers[index] < minNumber){
        minNumber = numbers[index];
    }
}
console.log(minNumber);

let min = Math.min(...numbers);
console.log(min);

// Merge Two array
let array1 = ['html' , 'css' , 'javascript'];
let array2 = [...array1 , 'bootstrap' , 'JQuery'];
console.log(array2);

// Create a copy of an array
let arr1 = [10,20,30,40];
let arr2 = [...arr1];
arr1.splice(1);
console.log(arr2);