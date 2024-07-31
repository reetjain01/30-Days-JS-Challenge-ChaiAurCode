// Regular Expression challenge

// Day 19

// Activity 1 : Basic Regular Expressions
// Task 1 ::
const regExpression = /JavaScript/g;
const str = "JavaScript is a programming language. I am learning JavaScript.";
console.log(str.match(regExpression));

// Task 2 ::
const regExpDig = /\d/g;
const strDig = "I am 25 years old.";
console.log(strDig.match(regExpDig));



// Activity 2 : Character Classes and Quantifiers
// Task 3 ::
const regExpCapLet = /\b[A-Z][a-zA-Z]*\b/g;
const strCapLet = "I am learning JavaScript.";
console.log(strCapLet.match(regExpCapLet));

// Task 4 ::
const regExpNum = /\d+/g;
const strNum = "Jersey No : 45 and 18";
console.log(strNum.match(regExpNum));



// Activity 3 : Grouping and Capturing
// Task 5 ::
const regExpAdd = /\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/;
const phoneNumber = "(123) 456-7890";
const match = phoneNumber.match(regExpAdd);
if (match) {
    const [fullMatch, areaCode, centralOfficeCode, lineNumber] = match;
    console.log("Full Match:", fullMatch);
    console.log("Area Code:", areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log("Line Number:", lineNumber);
}

// Task 6 ::
const regExpUserNameandDomainEmail = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
const email = "test01@gmail.com"
const matchEmail = email.match(regExpUserNameandDomainEmail);
if (matchEmail) {
    const [fullMatch, userName, domain] = matchEmail;
    console.log("Full Match:", fullMatch);
    console.log("User Name:", userName);
    console.log("Domain:", domain);
}



// Activity 4 : Assertions and Boundaries
// Task 7 ::
const regExpMatchFirstWord = /^\w+/;
const str1 = "Hello, World!";
console.log(str1.match(regExpMatchFirstWord));

// Task 8 ::
const regExpMatchLastWord = /\w+$/;
const str2 = "Hello, World!";
console.log(str2.match(regExpMatchLastWord));



// Activity 5 : Practical Applications
// Task 9 ::
const regExpPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).+$/;
let password = "Password123!";
let password2 = "Password123";
console.log(regExpPass.test(password));
console.log(regExpPass.test(password2));

// Task 10 ::
const regExpURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
let url = "https://www.example.com";
let url2 = "http://subdomain.example.co.uk/page";
let url3 = "Iamnoturl/";
console.log(regExpURL.test(url));
console.log(regExpURL.test(url2));
console.log(regExpURL.test(url3));
 