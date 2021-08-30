const paragraph = document.getElementById('output');

export function printError(errorText) {
    paragraph.innerHTML = errorText;

}

const printResult = ({ years, months, days }) => {
    paragraph.innerHTML = `
        год: ${years}
        месяц: ${months}
        день: ${days}
    `
}
export { printResult }