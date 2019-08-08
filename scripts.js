let currentNumber = 0;
let equation;

function selectNumber(number) {
  if (equation) {
    equation = `${equation}${number}`;
  }
  if (currentNumber) {
    currentNumber = `${currentNumber}${number}`;
  } else {
    currentNumber = number;
  }
  document.querySelector('#result').innerText = currentNumber;
  console.log(equation);
}

function selectOperator(operator) {
  let lastCharacter = equation && equation.charAt(equation.length - 1);
  let characterIsNotNumber = isNaN(Number(lastCharacter));
  if (!characterIsNotNumber) {
    calculate();
    equation = `${equation}${operator}`;
  } else if (currentNumber) {
    equation = `${currentNumber}${operator}`;
  } else {
    equation = `${equation.slice(0, -1)}${operator}`;
  }
  currentNumber = 0;
  console.log(equation);
  
}

function calculate() {
  const result = eval(equation);
  document.querySelector('#result').innerText = result || '0';
}

function reset() {
  
}