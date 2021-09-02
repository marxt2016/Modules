import { printError, deleteError, printResult } from './output.js';
import calcDatesDiff from './calcDatesDiff.js';
import { openTab } from './switchTabs.js';
import { start, stop, reset } from './timer.js';
import '../css/style.css';

const form = document.getElementById('calcDate');

form.onsubmit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dateFrom = formData.get('dateFrom');
    const dateTo = formData.get('dateTo');

    if (!dateFrom || !dateTo) {
        printError("Введите дату");
        return
    }
    const datesDiff = calcDatesDiff(dateFrom, dateTo);

    printResult(datesDiff);
}

const tablink = document.getElementsByClassName("tablink");
for (let i = 0; i < tablink.length; i++) {
    tablink[i].onclick = function (event) {
        deleteError();
        openTab(event, tablink[i].innerHTML);
    }
}


const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.onclick = start;

stopButton.onclick = stop;

resetButton.onclick = reset;








