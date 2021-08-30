
import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js'
export default function (dateFromString, dateToString) {
    if (dateFromString < dateToString) {
        [dateFromString, dateToString] = [dateToString, dateFromString]
    }

    const dateFrom = DateTime.fromISO(dateFromString);
    const dateTo = DateTime.fromISO(dateToString);

    const diff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject();
    console.log(diff);
    return diff
}