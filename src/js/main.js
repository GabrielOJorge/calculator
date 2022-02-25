const calcDisplay = document.getElementById("display");
const displayInput = document.getElementById("display-input");
const backspaceBtn = document.getElementById("backspace");
const percentageBtn = document.getElementById("percentage-btn");
const clearBtn = document.getElementById("clear-btn");
const divisionBtn = document.getElementById("division-btn");
const multiplBtn = document.getElementById("multipl-btn");
const substractBtn = document.getElementById("substract-btn");
const plusBtn = document.getElementById("plus-btn");
const signBtn = document.getElementById("sign-btn");
const equalBtn = document.getElementById("equal-btn");
const numBtns = document.querySelectorAll(".num");
const operatorsBtns = document.querySelectorAll(".operator");

let x = null;
let y = null;
let previousOperator = null;
let currentOperator = null;

const calculator = {
  add: () => x + y,
  substract: () => x - y,
  multiply: () => x * y,
  divide: () => x / y,
  takePercentage: () => {
    displayInput.value /= 100; 
    updateDisplay(displayInput.value);
    assignVarValue();
  }
};

const add = calculator.add;
const substract = calculator.substract;
const multiply = calculator.multiply;
const divide = calculator.divide;
const takePercentage = calculator.takePercentage;

const checkOperators = prev => {
  if (prev !== null && currentOperator !== prev) {
    operate(prev);
  }
};

const updateDisplay = value => {
  calcDisplay.textContent = value;
}

const clearDisplay = () => {
  updateDisplay(null);
};

const operate = (op) => {
  switch (op) {
    case "+":
      x = Math.round(add() * 10) / 10;
      updateDisplay(x);
      break
    case "-":
      x = Math.round(substract() * 10) / 10;
      updateDisplay(x);
      break
    case "*":
      x = Math.round(multiply() * 10) / 10;
      updateDisplay(x);
      break
    case "/":
      x = Math.round(divide() * 10) / 10;
      updateDisplay(x);
      break
  }
};

const clearAll = () => {
  x = null;
  y = null;
  updateDisplay(null);
  displayInput.value = null;
  currentOperator = null;
};

const assignVarValue = () => {
  let inputValue = Number(displayInput.value);
  currentOperator === null ? x = inputValue : y = inputValue;
}

const changeSign = () => {
  Math.sign(displayInput.value) !== 1 ? displayInput.value = Math.abs(displayInput.value) : displayInput.value = -Math.abs(displayInput.value);
  updateDisplay(displayInput.value);
  assignVarValue();
};

const deleteLastNum = () => {
  let teste = displayInput.value.split("");
  teste.pop();
  displayInput.value = teste.join("");
  updateDisplay(displayInput.value);
  assignVarValue();
};

numBtns.forEach(btn => btn.addEventListener("click", () => {
  calcDisplay.textContent += btn.value;
  displayInput.value += btn.value;
  assignVarValue();
}));

operatorsBtns.forEach(op => op.addEventListener("click", () => {
  displayInput.value = null;
  previousOperator = currentOperator;
  currentOperator = op.value;
  checkOperators(previousOperator);
}));

equalBtn.addEventListener("click", () => {
  if (x !== null && y !== null && currentOperator !== null) {
    clearDisplay();
    operate(currentOperator);
  }
  previousOperator = null;
  currentOperator = null;
});

percentageBtn.addEventListener("click", takePercentage);
signBtn.addEventListener("click", changeSign);
backspaceBtn.addEventListener("click", deleteLastNum);
clearBtn.addEventListener("click", clearAll);

window.onload = clearAll;