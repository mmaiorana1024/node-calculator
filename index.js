const rs = require("readline-sync");

const operationsList = ["*", "/", "+", "-", "%"];
let formula = "";
let opCheck = "";
let numbersArr = [];
let operatorArr = [];
let value1 = 0;
let value2 = 0;
let moreCalculations = false;

function main() {
  userInputs();
  calculations(value1, value2, opCheck);
  moreCalcs();
}

function userInputs() {
  userOperation();
  fixFormula(formula);
  errChecking(numbersArr, operatorArr);
}

function userOperation() {
  console.log("\nWhat operation would you like to perform ?");
  console.log("eg. 6 / 6  or 9 % 7");
  formula = rs.prompt();
}

function fixFormula(form) {
  numbersArr = form.replaceAll(" ", "").match(/\d+/g);
  operatorArr = form.replaceAll(" ", "").match(/\W/g);
}

function errChecking(numArr, opArr) {
  while (!numArr || !opArr) {
    console.log(`\n ${formula} is not a valid operation`);
    userInputs();
  }
  if (!isNaN(parseInt(numArr[0])) && !isNaN(parseInt(numArr[1]))) {
    value1 = parseInt(numArr[0]);
    value2 = parseInt(numArr[1]);
  } else {
    console.log(`\n ${formula} is not a valid operation`);
    userInputs();
  }

  opCheck = operationsList.find((check) => check === opArr[0]);
  while (!opCheck) {
    console.log(`\n ${formula} is not a valid operation`);
    userInputs();
  }
}

function calculations(num1, num2, operator) {
  if (operator === "+") {
    console.log(`\n\tAnswer is ${num1 + num2}\n`);
  } else if (operator === "-") {
    console.log(`\n\tAnswer is ${num1 - num2}\n`);
  } else if (operator === "/") {
    console.log(`\n\tAnswer is ${num1 / num2}\n`);
  } else if (operator === "*") {
    console.log(`\n\tAnswer is ${num1 * num2}\n`);
  } else if (operator === "%") {
    console.log(`\n\tAnswer is ${num1 % num2}\n`);
  } else {
    console.log("\n\t Error!");
  }
}

function moreCalcs() {
  moreCalculations = rs.keyInYN("Would you like to enter another calculation?");
  while (moreCalculations) {
    main();
  }
}

console.log("\n\t\tWelcome to Project Node Calculator!");
console.log("\t\tYour available operator are +, -, *, /, %");
console.log(
  "\t\tThe Modulo operator (%) will return the remainder of 2 numbers."
);

main();

console.log("\n\t ***Thank you for using the Project Node Calculator!***\n");
