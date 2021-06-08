const output = document.querySelector(".output");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal");
const clearSign = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
var numbers = [];
var operators = [];

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    if (output.value === "0") output.value = this.value;
    else output.value += this.value;
  });
}

decimal.onclick = () => {
  if (output.value.includes(".")) return;
  output.value += decimal.value;
};

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    numbers.push(parseFloat(output.value));
    output.value = "";
    operators.push(this.value);
  });
}

function clearArrays() {
  numbers = [];
  operators = [];
}

equalSign.addEventListener("click", function () {
  console.log(operators);
  console.log(numbers);
  for (let j = 0; j < operators.length; j++) {
    if (operators[j] === "×") {
      output.value = numbers[0] * numbers[1];
    }
    if (operators[j] === "÷") {
      output.value = numbers[0] / numbers[1];
    }
    if (operators[j] === "+") {
      output.value = numbers[0] + numbers[1];
    }
    if (operators[j] === "-") {
      output.value = numbers[0] - numbers[1];
    }
    console.log(operators);
    console.log(numbers);
    numbers.push(parseFloat(output.value));
    numbers.shift();
    numbers.shift();
    numbers.reverse();
  }
  clearArrays();
});

clearSign.onclick = () => {
  output.value = "0";
  clearArrays();
};
