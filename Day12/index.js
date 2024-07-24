// Error Handling challenge

// Day 12

// Activity 1 : Basic Error Handling with Try-Catch
// Task 1 ::
function errorChecking(){
    throw new Error("Automatically Error")
}

try {
    errorChecking();
} catch (error) {
    console.log("An Error Occured : ", error.message)
}

// Task 2 ::
function divideTwoNum(a,b){
    if(b == 0) throw new Error("Cannot divide by zero")
    return a/b;
}
try {
    let ans = divideTwoNum(2,0);
    console.log(ans)
} catch (error) {
    console.log("An Error Occured : ", error.message)
}



// Activity 2 : Finally Block
// Task 3 ::
try {
    console.log("Hello")
} catch (error) {
    console.log("Error : ", error)
} finally{
    console.log("Finally Block")
}



// Activity 3 : Custom Error Objects
// Task 4 ::
const positiveNum = (num) => {
    try{
        if(num < 0) throw new Error("Number is not positive")
        console.log(num,"is Positive Number")
    }
    catch(error){
        console.log(error.message)
    }
}

positiveNum(-8)
positiveNum(5)

// Task 5 ::
function checkEmptyStr(str){
    try {
        if(str == ""){
            throw new Error("String is Empty")
        }
        else{
            console.log("String is not Empty")
        }
    } catch (error) {
        console.log(error.message)
    }
}

checkEmptyStr()



// Activity 4 : Error Handling in Promises
// Task 6 ::
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Rejected after 1 seconds")
    }, 1000)
})
promise1.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

// Task 7 ::
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Rejection after 1 seconds")
    }, 1000);
})

async function checkProm(){
    try {
        let res = await promise;
        console.log(res);
    }
    catch(error){
        console.log("An Error : ",error)
    }
}
checkProm()



// Activity 5 : Graceful Error Handling in Fetch
// Task 8 ::
function fetchAPI(){
    fetch("invalid/com")
    .then((response) => response.json())
    .then((data) => {
        console.log('Data Fetched Successfully',data)
    })
    .catch((error) => {
        console.log("Data Not Fetched :( ", error)
    })
}
fetchAPI()

// Task 9 :: 
async function fetchAsync(){
    try {
        let response = await fetch("invalid/com")
        let data = await response.json()
        console.log('Data Fetched Successfully',data)
    }
    catch(error){
        console.log("Data Not Fetched :( ", error)
    }
}

fetchAsync()
