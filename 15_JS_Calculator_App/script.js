// Get all HTML Elements
let firstNumberElement = document.querySelector('#firstNumber');
let secondNumberElement = document.querySelector('#secondNumber');
let operatorButton = document.querySelector('#operator');
let equalsButton = document.querySelector('#equals-button');
let resultButton = document.querySelector('#result-button');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let divideButton = document.querySelector('#divide-button');
let multiplyButton = document.querySelector('#multiply-button');
let clearButton = document.querySelector('#clear-button');

// click on minus button
minusButton.addEventListener('click',function() {
   operatorButton.innerText = minusButton.innerText;
});

// click on plus button
plusButton.addEventListener('click',function() {
    operatorButton.innerText = plusButton.innerText;
});

// click on divide button
divideButton.addEventListener('click',function() {
    operatorButton.innerText = divideButton.innerText;
});

// click on multiply button
multiplyButton.addEventListener('click',function() {
    operatorButton.innerText = multiplyButton.innerText;
});

// click on Equals Button
equalsButton.addEventListener('click',function() {
   let firstNumber = firstNumberElement.value;
   let secondNumber = secondNumberElement.value;
   let operator = operatorButton.innerText;
   let result = 0;
   if(firstNumber !== '' && secondNumber !== ''){
       let num1 = Number.parseFloat(firstNumber);
       let num2 = Number.parseFloat(secondNumber);
       switch(operator){
           case '+':
               result = num1 + num2;
               break;
           case '-':
               result = num1 - num2;
               break;
           case '*':
               result = num1 * num2;
               break;
           case '/':
               result = num1 / num2;
               break;
       }
       resultButton.innerText = result;
   }

});

// click on Clear Button
clearButton.addEventListener('click',function() {
   firstNumberElement.value = '';
   secondNumberElement.value = '';
   operatorButton.innerText = '+';
   resultButton.innerText = 'RESULT';
});









