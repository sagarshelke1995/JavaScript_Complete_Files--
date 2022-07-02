// click on button
let startButton = document.querySelector('#start-btn');
let countElement = document.querySelector('#count');
let circleElement = document.querySelector('.circle');
let count = 0;
let interval = 0;
startButton.addEventListener('click',function() {
    interval = setInterval(countNumber,10);
});

let countNumber = () => {
    count = (count + 0.10);
    if(count < 100){
        countElement.innerText = count.toFixed(2);
        circleElement.style.backgroundColor = `rgb(${count * 2},50,50)`;
    }
    else{
        clearInterval(interval);
        countElement.innerText = 'Over';
    }

};