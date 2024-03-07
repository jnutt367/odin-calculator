document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';
    let equation = '';

    const clearDisplay = () => {
        currentInput = '';
        display.value = '';
    };

    const appendToDisplay = (value) => {
        currentInput += value;
        display.value = currentInput;
    };

    const appendOperatorToDisplay = (operator) => {
        equation += currentInput + operator;
        currentInput = '';
        display.value = operator;
    };

    const calculateResult = () => {
        equation += currentInput;
        try {
            const result = eval(equation);
            display.value = result;
            currentInput = result;
            equation = '';
        } catch (error) {
            display.value = 'Error';
            currentInput = '';
            equation = '';
        }
    };

    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            appendToDisplay(button.textContent);
        });
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            appendOperatorToDisplay(button.textContent);
        });
    });

    document.getElementById('equals').addEventListener('click', () => {
        calculateResult();
    });

    document.querySelector('.clear').addEventListener('click', () => {
        clearDisplay();
    });
});

