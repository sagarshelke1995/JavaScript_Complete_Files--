// Normal Function
function reverseStringNF(str) {
    let tempStr = '';
    for(let i = str.length-1 ; i >= 0 ; i--){
        let ch = str.charAt(i);
        tempStr += ch;
    }
    return tempStr;
}
console.log(reverseStringNF('Good Morning'));

// Function Expression
let reverseStringFE = function(str) {
    let tempStr = '';
    for(let i = str.length-1 ; i >= 0 ; i--){
        let ch = str.charAt(i);
        tempStr += ch;
    }
    return tempStr;
};
console.log(reverseStringFE('Good Morning'));

// Arrow Function
let reverseStringAR = (str) => {
    let tempStr = '';
    for(let i = str.length-1 ; i >= 0 ; i--){
        let ch = str.charAt(i);
        tempStr += ch;
    }
    return tempStr;
};
console.log(reverseStringAR('Good Morning'));

// limitation of Arrow Function
const student = {
    firstName : 'ARJUN',
    lastName : 'REDDY',
    fullName : () => {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());