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
const posNegBtn = document.getElementById("pos-neg");
const dotBtn = document.getElementById("dot-btn");
const equalBtn = document.getElementById("equal-btn");
const numBtns = document.querySelectorAll(".num");
const operatorsBtns = document.querySelectorAll(".operator");

let x = 0;
let y = 0;
let result = 0;
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

const operate = () => {
  switch (operator) {
    case "+":
      calcDisplay.textContent = add();
      x = add();
      break
    case "-":
      calcDisplay.textContent = substract();
      x = substract();
      break
    case "*":
      calcDisplay.textContent = multiply();
      x = multiply();
      break
    case "/":
      calcDisplay.textContent = divide();
      x = divide();
      break
  }
};

const clear = () => {
  x = 0;
  y = 0;
  calcDisplay.textContent = "";
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
  operator = op.value;
  calcDisplay.textContent = "";
  upperDisplay.textContent = `${x} ${op.value}`;
  displayInput.value = "";
}));

equalBtn.addEventListener("click", operate);
clearBtn.addEventListener("click", clear);