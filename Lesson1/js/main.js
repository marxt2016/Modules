import { printError, printResult } from './output.js';
import calcDatesDiff from './calcDatesDiff.js';


const form = document.getElementById('calcDate');

form.onsubmit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dateFrom = formData.get('dateFrom');
    const dateTo = formData.get('dateTo');

    if (!dateFrom || !dateTo) {
        printError("Error");
        return
    }
    const datesDiff = calcDatesDiff(dateFrom, dateTo);

    printResult(datesDiff);
}