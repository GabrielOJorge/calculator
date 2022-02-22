const calcDisplay = document.getElementById("display");
const upperDisplay = document.getElementById("upper-display");
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

let x = 0;
let y = 0;
let operator = "";

const calculator = {
  add: () => x + y,
  substract: () => x - y,
  multiply: () => x * y,
  divide: () => x / y,
};

const add = calculator.add;
const substract = calculator.substract;
const multiply = calculator.multiply;
const divide = calculator.divide;

const updateDisplay = value => {
  calcDisplay.textContent = value;
}

const clearDisplay = () => {
  updateDisplay("");
  upperDisplay.textContent = "";
};

const operate = () => {
  switch (operator) {
    case "+":
      updateDisplay(add());
      x = add();
      break
    case "-":
      updateDisplay(substract());
      x = substract();
      break
    case "*":
      updateDisplay(multiply());
      x = multiply();
      break
    case "/":
      updateDisplay(divide());
      x = divide();
      break
  }
};

const clearAll = () => {
  x = 0;
  y = 0;
  updateDisplay("");
  upperDisplay.textContent = "";
  displayInput.value = "";
  operator = "";
};

numBtns.forEach(btn => btn.addEventListener("click", () => {
  calcDisplay.textContent += `${btn.value}`;
  
  displayInput.value += btn.value;
  let inputValue = Number(displayInput.value);
  operator === "" ? x = inputValue : y = inputValue;
}));

operatorsBtns.forEach(op => op.addEventListener("click", () => {
  updateDisplay("");
  displayInput.value = "";
  operator = op.value;
  upperDisplay.textContent = `${x} ${op.value}`;
}));

equalBtn.addEventListener("click", () => {
  clearDisplay();
  operate();
});

clearBtn.addEventListener("click", clearAll);

window.onload = clearAll;