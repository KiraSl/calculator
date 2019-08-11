let currentNumber = 0;
let equation;

function selectNumber(number) {
  // if we clicked the dot and don't have a currentNumber, we will prepend 0 to the dot
  if (!currentNumber && number === '.') {
    number = '0.';
  }
  // if we have some form of equation set already, we will append the clicked number to the current equation
  equation = equation && `${equation}${number}`;
  // If we just clicked a number, we will append the new clicked number to the old one. 
  // Eg. clicked 1 preveiolsy, now clicked 3, the current number will be set to 13
  if (currentNumber) {
    currentNumber = `${currentNumber}${number}`;
  } else {
    // if not, we will set the clicked number to the global variable
    currentNumber = number;
  }
  // Replace the HTML result with the new currentNumber
  document.querySelector('#result').innerText = currentNumber;
  console.log(equation);
}

function selectOperator(operator) {
  // Get the last character of the eqation if there is one
  let lastCharacter = equation && equation.charAt(equation.length - 1);
  // Check if the last character of the eqation is a number or not
  let characterIsNotNumber = isNaN(Number(lastCharacter));
  // if the last character of the eqation is a number, we will calculate the equation
  // and append the pressed operator to the existing equation
  if (!characterIsNotNumber) {
    calculate();
    equation = `${equation}${operator}`;
  } else if (currentNumber) {
    // if the lasty character of the eqation is a not number AND we have clicked a number before we clicked on the operator
    // we will append the operator to the existing equation
    equation = `${currentNumber}${operator}`;
  } else {
    // if we previously clicked on an operator, we will replace the last character 
    // of the current equation (last character) with the operator we just clicked.
    equation = equation && `${equation.slice(0, -1)}${operator}`;
  }

  // We will always reset the currentNumber to make sure we can understand that we just clicked an operator and not a number 
  currentNumber = 0;
  console.log(equation);

}

function calculate() {
  // evaluate the current equation
  const result = eval(equation);
  // Replace the HTML result with the result of the equation, or if it is undefined, we set it to '0'
  document.querySelector('#result').innerText = result || '0';
}

function reset() {
  document.querySelector('#result').innerText = '0';
  equation = undefined;
  currentNumber = 0;
}