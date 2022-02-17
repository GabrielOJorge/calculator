const calcDisplay = document.getElementById("display");
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
let operator = "";

const add = () => x + y;
const substract = () => x - y;
const multiply = () => x * y;
const divide = () => x / y;

const operate = () => {
  if (operator === "+") {
    calcDisplay.textContent = add()
  } else if (operator === "*") {
    calcDisplay.textContent = multiply()
  } else if (operator === "-") {
    calcDisplay.textContent = substract()
  } else if (operator === "/") {
    calcDisplay.textContent = divide()
  }
};

const clear = () => {
  calcDisplay.textContent = "0";
  displayInput.value = "";
  x = 0;
  y = 0;
  operator = "";
};

numBtns.forEach(btn => btn.addEventListener("click", () => {
  calcDisplay.textContent += `${btn.value}`;
  
  displayInput.value += btn.value;
  let inputValue = Number(displayInput.value);
  operator === "" ? x = inputValue : y = inputValue;
}));

operatorsBtns.forEach(op => op.addEventListener("click", () => {
  operator = op.value
  
  displayInput.value = "";
}));

equalBtn.addEventListener("click", operate);

clearBtn.addEventListener("click", clear);