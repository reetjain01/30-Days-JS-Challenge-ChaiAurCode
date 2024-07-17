// Loops challenge

// Day 4

// Activity 1 : For Loop
// Task 1 ::
function PrintForLoop() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

// Task 2 ::
function printMultiplicationTable(num) {
  console.log("Multiplication Table of Number :", num);
  for (let i = 1; i <= 10; i++) {
    console.log(num, "x", i, "=", num * i);
  }
}

// printMultiplicationTable(5);

// Activity 2 : While loop
// Task 3 ::
function SumNumberWhile(num) {
  let sum = 0;
  let i = 1;

  while (i <= num) {
    sum += i;
    i++;
  }

  console.log("The sum of number 1 to", num, "=", sum);
}

// SumNumberWhile(10);

// Task 4 ::
function printReverseWhileLoop(num) {
  while (num != 0) {
    console.log(num);
    num--;
  }
}
// printReverseWhileLoop(10);


// Activity 3 : Do...While Loop
// Task 5 ::
function printDoWhileLoop(num){
    let i = 1;
    do{
        console.log(i);
        i++;
    }while(i <= num);

}
// printDoWhileLoop(5);

// Task 6 ::
function calculateFactorial(num){
    let i=1;
    let fact = 1;
    do{
        fact = fact * i;
        i++;
    }
    while(i <= num)
    console.log(fact);
}
// calculateFactorial(5);


// Activity 4 : Nested Loops
// Task 7 ::
function printStars(num){
    for(let i=1; i<=num; i++){
        let row="";
        for(let j=1; j<=i; j++){
            row += "*"
        }
        console.log(row);
    }
}
// printStars(5);


// Activity 5 : Loop Control Statements
// Task 8 ::
function ContinueNumberFunc(num){
    for(let i = 1; i<=num; i++){
        if(i == 5) continue;
        console.log(i);
    }
}

// ContinueNumberFunc(10)

// Task 9 ::
function BreakNumberFunc(num){
    for(let i=1; i<=num; i++){
        if(i == 7) break;
        console.log(i);
    }
}
BreakNumberFunc(10);