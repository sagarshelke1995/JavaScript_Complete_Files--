let student = {
    name : 'Rajan',
    age : 21,
    course : 'Engineering',
    college : 'IIT Mumbai',
    address : {
        street : 'Jubilee Hills',
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

// Destructuring
let {name , age , course , college } = student;
console.log(`NAME : ${name}
             AGE : ${age}
             COURSE : ${course}
             COLLEGE : ${college}`);

// Destructuring
let {street , city , state , country} = student.address;
console.log(`STREET : ${street}
             CITY : ${city}
             STATE : ${state}
             COUNTRY : ${country}`);

// Default Parameters
let greet = (name , age = 25) => {
    console.log(`Hello Mr. ${name} You are ${age} yrs Old!`);
};
greet('John');

