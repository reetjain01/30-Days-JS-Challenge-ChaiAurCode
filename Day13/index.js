// Modules challenge

// Day 13

// Activity 1 : Creating and Exporting Modules
// Task 1 ::
import {addTwoNum} from "./addNumber.js" 

const sum = addTwoNum(2,3);
console.log("The sum is", sum)

// Task 2 ::
import {Person} from "./objectPerson.js"
console.log("My name is", Person.name)
console.log("My email Address is", Person.email)
console.log("My Phone Number is", Person.phone)
Person.greet();



// Activity 2 : Named and Default Exports
// Task 3 ::
import { Greeting, Welcome} from "./manyFunctions.js"
Greeting();
Welcome();

// Task 4 ::
import Multiply from "./defaultFunction.js";
console.log(Multiply(2,3))


// Activity 3 : Importing Entire Modules
// Task 5 ::
import { College, degree } from "./constantExport.js";
College("IIT Bombay");
console.log("My Degree is", degree)



// Activity 4 : Using Thrid Party Modules
// Task 6 ::
import _ from "lodash"
const arr = [1,2,3,4,5];
let sumArr = _.sum(arr);
console.log(`Sum of Array ${sumArr}`);


// Task 7 ::
import axios from "axios";
let url = "https://jsonplaceholder.typicode.com/comments/1";
const fetchURL = async() => {
    try {
        let data = await axios.get(url);
        console.log("Resultant Data :: \n",data.data);
    } catch (error) {
        console.log("An Error Occured :", error)
    }
}
fetchURL()



// Activity 5 : Module Bundling 
// Task 8 ::
// Visit Folder webpack-demo to see this


