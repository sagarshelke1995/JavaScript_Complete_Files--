let displayTime = () => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector('#time').innerText = time;
};
setInterval(displayTime,1000);