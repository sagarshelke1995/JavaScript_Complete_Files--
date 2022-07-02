let numbers = ['ZERO' , 'ONE' , 'TWO' ,'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];
let displayWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++) {
        let digit = Number.parseInt(str.charAt(i));
        tempStr += ` ${numbers[digit]} `;
    }
    return tempStr;
};

// Get the HTML Elements
let numberBox = document.querySelector('#number');
let displayElement = document.querySelector('#text-number');

// keyup event on numberBox
numberBox.addEventListener('keyup',function() {
    displayElement.innerText = displayWordNumber(numberBox.value);
});