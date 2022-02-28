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
const dotBtn = document.getElementById("dot-btn")
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
  },

  checkOperators: prev => {
    if (prev !== null && currentOperator !== prev) {
      operate(prev);
    }
  },

  updateDisplay: value => {
    calcDisplay.textContent = value;
  },

  clearDisplay: () => {
    updateDisplay(null);
  },

  operate: op => {
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
  },

  clearAll: () => {
    x = null;
    y = null;
    updateDisplay(null);
    displayInput.value = null;
    currentOperator = null;
  },

  assignVarValue: () => {
    let inputValue = Number(displayInput.value);
    currentOperator === null ? x = inputValue : y = inputValue;
  },

  changeSign: () => {
    Math.sign(displayInput.value) !== 1 ? displayInput.value = Math.abs(displayInput.value) : displayInput.value = -Math.abs(displayInput.value);
    updateDisplay(displayInput.value);
    assignVarValue();
  },

  deleteLastNum: () => {
    let value = displayInput.value.split("");
    value.pop();
    displayInput.value = value.join("");
    updateDisplay(displayInput.value);
    assignVarValue();
  },

  equalBtnFunc: () => {
    if (x !== null && y !== null && currentOperator !== null) {
      clearDisplay();
      operate(currentOperator);
    }
    y = null;
    displayInput.value = x;
    previousOperator = null;
    currentOperator = null;
  },

  addDot: () => {
    if (displayInput.value.includes(".") === false) {
      displayInput.value += dotBtn.value; 
    }
    updateDisplay(displayInput.value);
    assignVarValue();
  },
};

const add = calculator.add;
const substract = calculator.substract;
const multiply = calculator.multiply;
const divide = calculator.divide;
const takePercentage = calculator.takePercentage;
const checkOperators = calculator.checkOperators;
const updateDisplay = calculator.updateDisplay;
const clearDisplay = calculator.clearDisplay;
const operate = calculator.operate;
const clearAll = calculator.clearAll;
const assignVarValue = calculator.assignVarValue;
const changeSign = calculator.changeSign;
const deleteLastNum = calculator.deleteLastNum;
const equalBtnFunc = calculator.equalBtnFunc;
const addDot = calculator.addDot;

numBtns.forEach(btn => btn.addEventListener("click", () => {
  if (x !== null && y === null && currentOperator !== null) {
    updateDisplay(null);
  } else if (x !== null && y !== null && currentOperator !== null) {
    updateDisplay(null);
  } 
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

equalBtn.addEventListener("click", equalBtnFunc);
percentageBtn.addEventListener("click", takePercentage);
signBtn.addEventListener("click", changeSign);
backspaceBtn.addEventListener("click", deleteLastNum);
clearBtn.addEventListener("click", clearAll);
dotBtn.addEventListener("click", addDot);

window.onload = clearAll;