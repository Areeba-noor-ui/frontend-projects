let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function calculate(value) {
    calculation += value;

    localStorage.setItem('calculation', calculation);

    displayCalculation();
}

function calculateResult() {

    try {

        calculation = eval(calculation).toString();

        localStorage.setItem('calculation', calculation);

        displayCalculation();

    } catch {

        calculation = '';

        document.querySelector('.display').innerHTML = 'Error';

        localStorage.setItem('calculation', '');
    }

}

function deleteLast() {
    calculation = calculation.slice(0, -1);
    updateDisplay();
}

function clearCalculations() {

    calculation = '';

    localStorage.setItem('calculation', '');

    displayCalculation();

}

function displayCalculation() {

    document.querySelector('.display').innerHTML =
        calculation || '0';

}