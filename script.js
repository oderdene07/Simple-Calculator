const output = document.querySelector(".output");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal");
const clearSign = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
var expression = [];

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
    expression.push(output.value);
    output.value = "";
    expression.push(this.value);
  });
}

equalSign.addEventListener("click", function () {
  for (let j = 0; j <= expression.length; j++) {
    if (expression[j] === "") {
      expression.splice(j - 1, 2);
      j = j - 2;
    }
  }
  console.log(expression);
  while (expression.length > 2) {
    for (let j = 0; j <= expression.length; j++) {
      if (expression[j] === "×") {
        var temp = expression[j - 1] * expression[j + 1];
        expression.splice(j - 1, 3, temp);
        output.value = expression[0];
        console.log(expression);
        j = j - 2;
      }
    }

    for (let j = 0; j <= expression.length; j++) {
      if (expression[j] === "÷") {
        var temp = expression[j - 1] / expression[j + 1];
        expression.splice(j - 1, 3, temp);
        output.value = expression[0];
        console.log(expression);
        j = j - 2;
      }
    }

    for (let j = 0; j <= expression.length; j++) {
      if (expression[j] === "-") {
        var temp = expression[j - 1] - expression[j + 1];
        expression.splice(j - 1, 3, temp);
        output.value = expression[0];
        console.log(expression);
        j = j - 2;
      }
    }

    for (let j = 0; j <= expression.length; j++) {
      if (expression[j] === "+") {
        var temp =
          parseFloat(expression[j - 1]) + parseFloat(expression[j + 1]);
        expression.splice(j - 1, 3, temp);
        output.value = expression[0];
        console.log(expression);
        j = j - 2;
      }
    }
  }
  expression = [];
});

clearSign.onclick = () => {
  output.value = "0";
  expression = [];
};
