// Promise and Async/Await challenge

// Day 11

// Activity 1 : Understanding Promises
// Task 1 ::
let resolvePromise  = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved after 2 seconds")
    }, 2000)
})
resolvePromise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// Task 2 ::
let rejectPromise  = new Promise((resolve, reject) => {
    setTimeout(() => {
        if('hello' == "HELO") resolve("It is True")
        reject("Rejection an error after 2 seconds")
    }, 2000)
})
rejectPromise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})



// Activity 2 : Chaining Promises
// Task 3 :: 
const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First Promise Resolved")
    }, 1000)
})
const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second Promise Resolved")
    }, 2000)
})
const prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third Promise Resolved")
    }, 3000)
})
prom1.then((res) => {
    console.log(res)
    return prom2
}).then((res) => {
    console.log(res)
    return prom3
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})



// Activity 3 : Using Async/Await
// Task 4 ::
async function asyncFunc(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async Function Resolved after 2 seconds")
        }, 2000)
    })
    let result = await promise;
    console.log(result)
}
asyncFunc()

// Task 5 ::
async function rejectAsynFunc(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if('hello' == "HELO") resolve("It is True")
            reject("Rejection an error after 2 seconds")
        }, 2000)
    })
    try {
        let result = await promise;
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
rejectAsynFunc()


// Activity 4 : Fetching Data from an API
// Task 6 :: 
fetch("https://jsonplaceholder.typicode.com/comments")
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

// Task 7 ::
async function fetchAsync(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/comments")
        let data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log("Error : ", error)
    }
}

fetchAsync()



// Activity 5 : Concurrent Promises
// Task 8 ::
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First Promise")
    }, 1000)
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second Promise")
    }, 2000)
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third Promise")
    }, 3000)
})
Promise.all([promise1, promise2, promise3]).then((alldata) => {
    console.log("All Promises Resolved")
    alldata.forEach((data, index) => {
        console.log(`Promise ${index+1} : ${data}`)
    })
}).catch((error) => {
    console.log(error)
})

// Task 9 :: 
Promise.race([promise1, promise2, promise3]).then((data) => {
    console.log("First Promise Resolved :", data)
})