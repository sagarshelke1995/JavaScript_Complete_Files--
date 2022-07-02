let a = 10;
{
    let a = 20;
    {
        let a = 30;
        console.log(a);// 30
    }
}

// if condition
let course = 'Engineering';
if(course === 'Engineering'){
    let dept = 'Software';
}
//console.log(dept); // cannot access

// for Loop
for(let i=1; i<=10; i++){

}
// console.log(i); // Cannot Access

// Functions with scope
let message = 'Good Evening';
let greet = () => {
    let message = 'Good Morning';
    return message;
};
message = greet();
console.log(message);


