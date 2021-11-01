const secondHand = document.getElementById('sec');
const minHand = document.getElementById('min');
const hourHand = document.getElementById('hour');


function setDate() {
    const now = new Date();
    let sec = now.getSeconds() / 60;
    let min = now.getMinutes() / 60;
    let hour = now.getHours() / 12;

    secondHand.style.transform = "rotate(" + (sec * 360) + "deg)";
    minHand.style.transform = "rotate(" + (min * 360) + "deg)";
    hourHand.style.transform = "rotate(" + (hour * 360) + "deg)";

}

setInterval(setDate, 1000);