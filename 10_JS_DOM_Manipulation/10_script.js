// get the html document
let val = document;


// get the head section
val = document.head;

// get the title
val = document.title;
document.title = 'Change by 11AM Batch';

// get the body element
val = document.body;
console.log(val);

// nav tag
let navTag = document.querySelector('nav');
let aTag = document.querySelector('nav a');
console.log(aTag);

// inner Text
let theText = aTag.innerText;
aTag.innerText = 'Changed by 11AM Batch';
console.log(theText);

// get the html elements
let h1Tag = document.querySelector('#msg h1');
h1Tag.innerText = 'Good Morning';

// change the styles
h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow = '0 0 10px black';