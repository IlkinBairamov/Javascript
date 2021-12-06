function calc() {
  let x, y, z, oper;
  x = prompt("input first number");
  y = prompt("input second number");
  oper = prompt("input an operator");

  if (oper == "+") {
    z = Number(x) + Number(y);
  } else if (oper == null) {
    z = "Error";
  } else if (x == null) {
    z = "Error";
  } else if (y == null) {
    z = "Error";
  } else if (oper == "/") {
    z = Number(x) / Number(y);
  } else if (oper == "*") {
    z = Number(x) * Number(y);
  } else if (oper == "-") {
    z = Number(x) - Number(y);
  }

  return z;
}
document.getElementById("demo").innerHTML = calc();

// ikinci versiya ---->

// let result;
// let operator = prompt("INPUT operator ( either +, -, * or / ): ");
// let number1 = Number(prompt("INPUT first number: "));
// let number2 = Number(prompt("INPUT second number: "));

// switch (operator) {
//   case "+":
//     result = number1 + number2;
//     console.log(result);
//     break;

//   case "-":
//     result = number1 - number2;
//     console.log(result);
//     break;

//   case "*":
//     result = number1 * number2;
//     console.log(result);
//     break;

//   case "/":
//     result = number1 / number2;
//     console.log(result);
//     break;

//   default:
//     console.log("Invalid operator");
//     break;
// }
