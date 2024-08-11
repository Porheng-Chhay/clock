const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));
console.log(numberElement);

// Create bar seconds
for (let i = 1; i <= 60; i++) {
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime() {
    const date = new Date();
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();

    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
}

// Call getCurrentTime function on page load
getCurrentTime();

// Call getCurrentTime to set clock hands every second
setInterval(getCurrentTime, 1000);