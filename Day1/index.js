// Variable and data types challenge

// Day 1 

// Activity 1 : Variable Declaration
// Task 1 ::
var num = 45;
console.log("The number is : " , num);
// Task 2 ::
let name = "Reet";
console.log("Your name is : " , name);


// Activity 2 : Constant Declaration
// Task 3 ::
const isCheck = false;
console.log("Are you Verified : " , isCheck);


// Activity 3 : Data Types
// Task 4 ::
let age = 21;
let fullName = "Reet Jain";
let eligibleForVote = true;
let bio = {
    name : "Reet",
    age : 21
};
let marks = [88,78,85,91,75];

console.log("The type of ", age," is ", typeof(age))
console.log("The type of ", fullName," is ", typeof(fullName))
console.log("The type of ", eligibleForVote," is ", typeof(eligibleForVote))
console.log("The type of ", bio," is ", typeof(bio))
console.log("The type of ", marks," is ", typeof(marks))


// Activity 4 : Reassignin Variables
// Task 5 ::
let s = "Hello";
console.log("Assigned Value : ", s);
s = "Hello World";
console.log("ReAssigned Value : ", s);


// Activity 5 : understanding const
// Task 6 ::
const x = "Hello";
console.log("Assigned Value : ", x);
x = "Hello World";
console.log("ReAssigned Value : ", x);



// Feature Request

// 1. Variables Types console Log
let a = 21;
let b = "Reet Jain";
let c = true;
let d = {
    name : "Reet",
    age : 21
};
let e = [88,78,85,91,75];

console.log("a ", a," typeof ", typeof(a))
console.log("b ", b," typeof ", typeof(b))
console.log("c ", c," typeof ", typeof(c))
console.log("d ", d," typeof ", typeof(d))
console.log("e ", e," typeof ", typeof(e))


// 2. Reassignment Demo
function ReAssignmentDemo(){
    // let variable
    let assignedLet = "Reet";
    console.log("Assigned value using let : ", assignedLet);
    assignedLet = "Reet Jain";
    console.log("Reassigned Value using let : ", assignedLet);

    // const variable
    const assignedConst = "College";
    console.log("Assigned value using const : ", assignedConst);
    try {
        assignedConst = "Study in College"; 
        console.log("Reassigned Value using const : ", assignedConst);
    } catch (error) {
        console.log(error)
    }
    
}