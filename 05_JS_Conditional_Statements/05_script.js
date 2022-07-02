// If-else
let time = -10;
if(time >= 0 && time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time > 17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter Proper time Dude');
}

// Switch statement
let day = 9;
let today = 'Today is : ';
switch(day){
    case 0:
        today += ' SUNDAY ';
        break;
    case 1:
        today += ' MONDAY ';
        break;
    case 2:
        today += ' TUESDAY ';
        break;
    case 3:
        today += ' WEDNESDAY ';
        break;
    case 4:
        today += ' THURSDAY ';
        break;
    case 5:
        today += ' FRIDAY ';
        break;
    case 6:
        today += ' SATURDAY ';
        break;
    default:
        today += ' Enter Proper Day Dude ';
        break;
}
console.log(today);

// For Loop to print 0 to 10 diff 1
let result = '';
for(let i = 0; i<=10; i++){
    if(i <= 9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);

// for - loop to print 20 to 0 diff 2
result = '';
for(let i=20; i >= 0 ; i-=2){
    if(i > 0){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);

// For-loop to print the Stars
result = '';
let count = 5;
for(let i= 1; i<= count; i++){
    for(let j = 1; j<= i; j++){
        result += '*';
    }
    result += `\n`;
}
console.log(result);

// for loop to print ascending Numbers
result = '';
count = 9;
for(let i = 1; i<= count; i++){
    for(let j =1 ; j <= i; j++){
        result += `${j}`;
    }
    result += `\n`;
}
console.log(result);

// for loop to print ascending Same Numbers
result = '';
count = 9;
for(let i = 1; i<= count; i++){
    for(let j =1 ; j <= i; j++){
        result += `${i}`;
    }
    result += `\n`;
}
console.log(result);

// for loop to print descending Same Numbers
result = '';
count = 9;
for(let i = count; i >= 1; i--){
    for(let j = 1; j<= i ; j++){
        result += `${i}`;
    }
    result += `\n`;
}
console.log(result);

// for loop to print descending Numbers
result = '';
count = 9;
for(let i = count; i >= 1; i--){
    for(let j = 1; j<= i ; j++){
        result += `${j}`;
    }
    result += `\n`;
}
console.log(result);

// for loop to print descending Numbers
result = '';
count = 9;
for(let i = count; i >= 1; i--){
    for(let j = i; j>= 1 ; j--){
        result += `${j}`;
    }
    result += `\n`;
}
console.log(result);

// While loop
console.log('------------------------------------- While Loop --------------------------');

// while Loop to print 0 to 10 diff 1
result = '';
let i = 0;
while(i<=10){
    if(i <= 9){
        result += `${i} - `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
console.log(result);

// while - loop to print 20 to 0 diff 2
result = '';
i = 20;
while(i >= 0){
    if(i > 0){
        result += `${i} - `;
    }
    else{
        result += `${i}`;
    }
    i-=2;
}
console.log(result);

// For-loop to print the Stars
result = '';
count = 5;
i= 1;
while(i<= count){
    let j = 1;
    while(j<= i){
        result += '*';
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);

// for loop to print ascending Numbers
result = '';
count = 9;
i = 1;
while(i<= count){
    let j =1;
    while(j <= i){
        result += `${j}`;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);

// for loop to print ascending Same Numbers
result = '';
count = 9;
i = 1;
while(i<= count){
    let j =1;
    while(j <= i){
        result += `${i}`;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);

// for loop to print descending Same Numbers
result = '';
count = 9;
i = count;
while(i >= 1){
    let j = 1;
    while(j<= i){
        result += `${i}`;
        j++;
    }
    result += `\n`;
    i--;
}
console.log(result);

// for loop to print descending Numbers
result = '';
count = 9;
i = count;
while(i >= 1){
    let j = 1;
    while(j<= i){
        result += `${j}`;
        j++;
    }
    result += `\n`;
    i--;
}
console.log(result);

// for loop to print descending Numbers
result = '';
count = 9;
i = count;
while( i >= 1){
    let j = i;
    while(j>= 1){
        result += `${j}`;
        j--;
    }
    result += `\n`;
    i--;
}
console.log(result);

console.log('---------------------- Do While ------------------ ');