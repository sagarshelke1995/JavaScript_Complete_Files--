// changeWishMessage
let changeWishMessage = (message,color) => {
    let h1Tag = document.querySelector('#msg');
    h1Tag.innerText = message;
    h1Tag.style.background = `linear-gradient(45deg,darkslategray,${color})`;
    h1Tag.style.color = 'white';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};

// Change Image
let changeImage = (imageName) => {
    let imageTag = document.querySelector('#laptop-image');
    imageTag.setAttribute('src',`../img/${imageName}`);
};
