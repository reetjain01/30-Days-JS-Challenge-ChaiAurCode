// Functions challenge

// Day 5

// Activity 1 : Function Declaration
// Task 1 ::
function checkEvenOdd(num){
    if(num % 2 == 0){
        console.log(num,"is an Even Number");
    }
    else{
        console.log(num,"is a Odd Number");
    }
}
checkEvenOdd(84)

// Task 2 ::
function calculateSquare(num){
    return num*num;
}
let squareAns = calculateSquare(5);
console.log(squareAns)


// Activity 2 : Function Expression
// Task 3 ::
function MaximumNumber(num1, num2){
    if(num1 > num2){
        console.log(num1, "is greater than", num2);
    }
    else{
        console.log(num2,"is greater than", num1);
    }
}

MaximumNumber(55,34);

// Task 4 ::
function concatenateString(s1, s2){
    return s1 + s2;
}
let stringAns = concatenateString("Reet", " Jain");
console.log(stringAns)


// Activity 3 : Arror Functions
// Task 5 ::
const sumTwoNum = (a,b) => {
    return a + b;
}
let sumAns = sumTwoNum(5,4);
console.log(sumAns)

// Task 6 :: 
const checkSpecificChar = (str, ch) => {
    for(let i =0; i<str.length; i++){
        if(str[i] == ch){
            return true;
        }
    }
    return false;
}
let checkCharAns = checkSpecificChar("Reet", "j");
console.log(checkCharAns)

const checkChar = (str, ch) => {
    return str.includes(ch);
}
let checkCharAns1 = checkChar("Reet", "j");
console.log(checkCharAns1);


// Activity 4 : Function Parameters and Default Values
// Task 7 ::
const productTwoNum = (a, b=2) => {
    return a * b;
}
let prodAns = productTwoNum(2, 5);
// let prodAns = productTwoNum(5);
console.log(prodAns)

// Task 8 :: 
function GreetingMsg(name, age=18){
    console.log("Hello", name, "\nYour age is", age)
}

GreetingMsg("Reet", 21)


// Activity 5 : Higher Order Functions
// Task 9 :: 
const HOF1 = (func, num) => {
    return func(num);
}

const hello = (num) => {
    for(let i=0; i<num; i++){
        console.log("Hello");
    }
}

HOF1(hello, 3)

// Task 10 :: 
const HOF2 = (func1, func2, val) => {
    let a = func1(val)
    func2(a);
}

const sumNum = (num) => {
    return num + num;
}

const productNum = (num1) => {
    console.log(num1 * num1);
}

HOF2(sumNum, productNum, 4)