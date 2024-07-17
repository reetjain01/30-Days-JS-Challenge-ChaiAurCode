// Operators challenge

// Day 2 

// Activity 1 : Arithmetic operations
// Task 1 ::
let addNum1 = 45;
let addNum2 = 35;
let sum = addNum1 +addNum2;
console.log("Addition of two numbers : ", addNum1, "+", addNum2, "=", sum);

// Task 2 ::
let subNum1 = 45;
let subNum2 = 35;
let sub = subNum1 - subNum2;
console.log("Subtraction of two numbers : ", subNum1, "-", subNum2, "=", sub);

// Task 3 ::
let mulNum1 = 5;
let mulNum2 = 15;
let multiply = mulNum1 * mulNum2;
console.log("Multiplication of two numbers : ", mulNum1, "*", mulNum2, "=", multiply);

// Task 4 ::
let divNum1 = 45;
let divNum2 = 9;
let divide = divNum1 / divNum2;
console.log("Division of two numbers : ", divNum1, "/", divNum2, "=", divide);


// Activity 2 : Assignment operations
// Task 6 ::
let n1 = 100;
console.log("Before assignment operation +=, value of n  : ", n1);
n1 += 10;
console.log("After assignment operation +=, value of n  : ", n1);

// Task 7 ::
let n2 = 100;
console.log("Before assignment operation -=, value of n  : ", n2);
n2 -= 10;
console.log("After assignment operation -=, value of n  : ", n2);


// Activity 3 : Comparison operations
// Task 8 ::
let a = 45;
let b = 55;
let greaterThan = a > b;
let smallerThan = a < b;
console.log("a =", a, "is Greater than b =",b ,":", greaterThan);
console.log("a =", a, "is Smaller than b =",b ,":", smallerThan);

// Task 9 ::
let c = 45;
let d = 45;
let greaterThenEqual = c >= d;
let smallerThenEqual = c <= d;
console.log("c =", c, "is Greater than and  equal to d =",d ,":", greaterThenEqual);
console.log("c =", c, "is Smaller than and equal to d =",d ,":", smallerThenEqual);

// Task 10 ::
let e = 100;
let f = 100;
let doubleEqual = e == f;
let trippleEqual = e === f;
console.log("e =", e, "is equal to f =",f ,":", doubleEqual);
console.log("e =", e, "is strictly equal to f =",f ,":", trippleEqual);


// Activity 4 : Logical Operator
let andResult = 9 > 6 && 11 < 21;
console.log("Result of AND operation : ", andResult);

// Task 12
let orResult = 6 > 10 || 12 < 5;
console.log("Result of OR operation : ", orResult);

// Task 13
let notResult = !(15 > 20);
console.log("Result of NOT operation : ", notResult);


// Activity 5 : Ternary Operator
// Task 14 ::
function isPositive(a){
    console.log(a > 0 ? "POSITIVE NUMBER" : "NEGATIVE NUMBER");
}
isPositive(-9);



// Feature Request: Arithmetic Operations Script
function arithmeticOperations(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);
    console.log("Remainder:", a % b);
  }

  arithmeticOperations(12, 4);
  
  // Feature Request: Comparison and Logical Operators Script
  function comparisonAndLogicalOperators(a, b) {
    console.log(`${a} > ${b}:`, a > b);
    console.log(`${a} < ${b}:`, a < b);
    console.log(`${a} >= ${b}:`, a >= b);
    console.log(`${a} <= ${b}:`, a <= b);
    console.log(`${a} == ${b}:`, a == b);
    console.log(`${a} === ${b}:`, a === b);
    console.log(`(${a} > ${b}) && (${a} < ${b + 5}):`, a > b && a < b + 5);
    console.log(`(${a} > ${b}) || (${a} < ${b + 5}):`, a > b || a < b + 5);
    console.log(`!(${a} > ${b}):`, !(a > b));
  }

  comparisonAndLogicalOperators(8, 5);
  
  // Feature Request: Ternary Operator Script
  function checkPositiveOrNegative(num) {
    let result = num > 0 ? "Positive" : "Negative";
    console.log("The number is:", result);
  }
  
  checkPositiveOrNegative(-3);
