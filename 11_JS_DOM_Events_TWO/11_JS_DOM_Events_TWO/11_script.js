// Keyup event
let textBox = document.querySelector('#text-box');
let msgElement = document.querySelector('#msg');
textBox.addEventListener('keyup',function() {
    let textEntered = textBox.value;
    msgElement.innerText = textEntered;
});

// SMS App
let textAreaBox = document.querySelector('#text-area');
let spanTag = document.querySelector('#char-count');
textAreaBox.addEventListener('keyup',function() {
    let textEnteredLength = textAreaBox.value.length;
    spanTag.innerText = (100 - textEnteredLength);
});

// Display Triangle
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=1; i<=str.length;i++){
        tempStr += `${str.substr(0,i)}\n`;
    }
    return tempStr;
};
let inputField = document.querySelector('#input-field');
let triangleElement = document.querySelector('#triangle');
inputField.addEventListener('keyup',function() {
   let textEntered = inputField.value;
   let triangleString = triangleThree(textEntered);
    triangleElement.innerText = triangleString;
});

// Change event on select Box
let selectBox = document.querySelector('#select-box');
let selectOptionElement = document.querySelector('#select-option');
selectBox.addEventListener('change',function() {
    let selectedOption = selectBox.value;
    selectOptionElement.innerText = selectedOption.toUpperCase();
});

// Change Password
let passwordBox = document.querySelector('#password-box');
let checkBox = document.querySelector('#check');
checkBox.addEventListener('change',function() {
    let attribute = passwordBox.getAttribute('type');
    if(attribute === 'password'){
        passwordBox.setAttribute('type','text');
    }
    else{
        passwordBox.setAttribute('type','password');
    }
});

// Create New Element from JavaScript
let divTag = document.createElement('div');
let h1Tag = document.createElement('h1');
let spanTag1 = document.createElement('span');
spanTag1.innerText = 'Good';
spanTag1.style.color = 'red';

let spanTag2 = document.createElement('span');
spanTag2.innerText = 'Morning';
spanTag2.style.color = 'blueviolet';

h1Tag.appendChild(spanTag1);
h1Tag.appendChild(spanTag2);
divTag.appendChild(h1Tag);

document.body.appendChild(divTag);






