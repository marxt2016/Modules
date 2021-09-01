import { printError, deleteError } from './output.js';
let userInput = document.getElementById('input');
let seconds = document.getElementById('second');
let minutes = document.getElementById('minute');
let totalSeconds = 0;

let countdown = null;

export function start() {
    if (userInput.value > 0) {
        deleteError();
        showInput(userInput.value);
        totalSeconds = +userInput.value;
        countdown = setInterval(timer, 1000);
    }
    else {
        printError("Введите число");
    }
};

export function stop() {
    clearInterval(countdown);
};

export function reset() {
    clearInterval(countdown);
    showInput(0);
    userInput.value = 0;
};

function timer() {
    totalSeconds--;
    if (totalSeconds > 0) {
        showInput(totalSeconds);
    } else {
        showInput(0);
        clearInterval(countdown);
    }
}


function format(val) {
    let valString = val + '';
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function showInput(value) {
    seconds.innerHTML = format(Math.floor(+(value % 60)));
    minutes.innerHTML = format(Math.floor(+(value / 60)));
}