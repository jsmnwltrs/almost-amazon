const printToDom = (stringToPrint, divId) => {
    const element = document.getElementById(divId);
    element.innerHTML = stringToPrint;
}

export {printToDom};