
import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@2.0.2/build/global/luxon.js'
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