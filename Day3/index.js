// Control Structures challenge

// Day 3

// Activity 1 : If-Else Statements
// Task 1 ::
function checkNumber(num) {
  if (num > 0) {
    console.log(num, "is a Positive Number");
  } else if (num == 0) {
    console.log(num, " is a zero number");
  } else {
    console.log(num, "is a Negative Number");
  }
}
checkNumber(5);

// Task 2 ::
function checkVotingCriteria(age) {
  if (age >= 18) {
    console.log("Eligible for Voting");
  } else {
    console.log("You are under 18, Not Eligible for Voting");
  }
}
checkVotingCriteria(21)

// Activity 2 : Nested If-Else Statements
// Task 3 ::
function LargestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log(a, "is greater number than ", b, ",", c);
  } else if (b > c) {
    console.log(b, "is greater number than ", a, ",", c);
  } else {
    console.log(c, "is greater number than ", a, ",", b);
  }
}

LargestNumber(10, 20, 30);

// Activity 3 : Switch Case
// Task 4 ::
function WeekDay(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Enter Valid Number between 1-7");
      break;
  }
}

WeekDay(3);

// Task 5 ::
function GradeScore(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      console.log("A Grade");
      break;
    case score >= 80 && score < 90:
      console.log("B Grade");
      break;
    case score >= 70 && score < 80:
      console.log("C Grade");
      break;
    case score >= 55 && score < 70:
      console.log("D Grade");
      break;
    case score > 35 && score < 55:
      console.log("E Grade");
      break;
    case score <= 35:
      console.log("F Grade");
      break;
    default:
      console.log("Enter Valid Score!!");
      break;
  }
}

GradeScore(85);

// Activity 4 : Conditional (Ternary) Operator
// Task 6 ::
function OddEven(num) {
  let even = num % 2 == 0;
  let ans = even ? "Even Number" : "Odd Number";
  console.log(ans);
}

OddEven(5);

// Activity 5 : Combining Conditions
// Task 7 ::
function isLeapYear(year) {
  if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
    console.log(year, "is a Leap Year");
  } else {
    console.log(year, "is not a Leap Year");
  }
}

isLeapYear(2024);
