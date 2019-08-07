let currentValue = 0;
let equation, selectedOperator;

function selectNumber(value) {
  if (equation) {
    equation = `${equation}${value}`;
  }
  if (currentValue) {
    currentValue = `${currentValue}${value}`;
  } else {
    currentValue = value;
  }
  document.querySelector('#result').innerText = currentValue;
  displayEquation();
}

function displayEquation() {
  document.querySelector('#equation').innerText = equation || '';
}

function selectOperator(value) {
  selectedOperator = value;
  const equationLastCharacter = equation && equation.charAt(equation.length -1);
  const lastCharacterIsNumber = !isNaN(Number(equationLastCharacter));
  if (lastCharacterIsNumber) {
    calculate();
    equation = `${equation}${selectedOperator}`;
  } else if (currentValue) {
    equation = `${currentValue}${selectedOperator}`;
  } else {
    equation = equation && equation.slice(0, -1) + value;
  }
  currentValue = undefined;
  displayEquation();
}

function calculate() {
  document.querySelector('#result').innerText = eval(equation) || '0';
  displayEquation();
}

function reset() {
  document.querySelector('#result').innerText = 0;
  resetDefaults();
  displayEquation();;
}

function resetDefaults() {
  // reset all global variables
  selectedOperator = undefined;
  equation= undefined;
  currentValue = 0;
}
