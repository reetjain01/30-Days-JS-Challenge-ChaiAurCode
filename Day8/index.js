// ES6+ Features challenge

// Day 8

// Activity 1 : Template Literals
// Task 1 ::
let name1 = "Reet"
let age = 21
console.log(`My name is ${name1} and my age is ${age}`)

// Task 2 ::
let multiline = `Hello Everyone,
My Name is ${name1} and I am in 4th year of College.
I am learning JavaScript.
My age is ${age}.
`

console.log(multiline)


// Activity 2 : Destructuring
// Task 3 ::
const arr = [1, 2, 3, 4, 5];
let [firstELem, secondElem, ...restElems] = arr;
console.log(firstELem);   
console.log(secondElem);  
console.log(restElems);  


// Task 4 ::
const book = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2018
};

let {title, author} = book;
console.log("Title :",title);
console.log("Author :",author);


// Activity 3 : Spread and Rest Operators
// Task 5 ::
let arr1 = [1,2,3,4,5];
let newArr = [...arr1,6,7];
console.log(arr1)
console.log(newArr)

// Task 6 ::
let sum = (...arr) => {
    let sum = 0;
    arr.forEach((elem) => {
        sum += elem;
    })
    return sum;
}
console.log(sum(1,2,3,4,5))


// Activity 4 : Default Parameters
// Task 7 ::
let productSum = (num1, num2 = 5) => {
    return num1 * num2;
}
console.log(productSum(3))
console.log(productSum(3, 10))


// Activity 5 :  Enhanced Object Literals
// Task 8 ::
const id = 1;
const name = "Rohan";
const branch = "Computer Engineering";
const semester = 5;

let rollno = (rollno) => {
    return ("My Roll Number is :",rollno )
}

const student = { id, name, branch, semester, rollno };

console.log(student);
console.log(student.rollno("18BIT200"));

// Task 9 : 
const p1 = "school";
const p2 = "college";
const p3 = "job_company";

const bio = {
    [p1]: "Rachana School",
    [p2]: "NIT Surat",
    [p3]: "Google"
}

console.log(bio);


