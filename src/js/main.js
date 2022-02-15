const calcDisplay = document.getElementById("display");
const backspaceBtn = document.getElementById("backspace");
const percentageBtn = document.getElementById("percentage-btn");
const clearBtn = document.getElementById("clear-btn");
const divisionBtn = document.getElementById("division-btn");
const multiplBtn = document.getElementById("multipl-btn");
const substractBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const posNegBtn = document.getElementById("pos-neg");
const dotBtn = document.getElementById("dot-btn");
const equalBtn = document.getElementById("equal-btn");
const numBtns = document.querySelectorAll(".num");

let x = 0;
let y = 0;
let op = "";

const add = () => x + y;
const substract = () => x - y;
const multiply = () => x * y;
const divide = () => x / y;

const getBtnValue = value => {
  x = Number(value);
  y = Number(value);
};