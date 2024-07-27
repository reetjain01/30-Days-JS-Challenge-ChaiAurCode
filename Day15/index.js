// Closures challenge

// Day 15

// Activity 1 : Unerstanding Clousers
// Task 1 ::
function fun1(){
    let fun1Var = "Hello World" 
    function fun2(){
        console.log(fun1Var);
    }
    return fun2;
}
const function1 = fun1()
function1()

// Task 2 ::
function createCounter(){
    let counter = 0;
    return {
        incrementCnt : function(){
            counter++;
        },
        getCount : function(){
            return counter;
        }
    };
}
let counter = createCounter();
counter.incrementCnt();
counter.incrementCnt();
console.log(counter.getCount())


// Activity 2 : Practical Clousers
// Task 3 ::
function createUniqueId(){
    let lastId = 0;
    return {
        getUniqueId : function(){
            lastId++;
            return `ID_${lastId}`;
        }
    }
}
let uniqueId = createUniqueId();
console.log(uniqueId.getUniqueId());
console.log(uniqueId.getUniqueId());

// Task 4 :: 
function greet(name){
    return function(){
        console.log(`Hello ${name}`);
    }
}
let greet1 = greet("John");
greet1();


// Activity 3 : Clousers in Loop
// Task 5 ::
function createArray(){
    const array = [];
    for(let i=0; i<5; i++){
        array.push(function(){
            console.log(`Function called at ${i}th index`);
        });
    }
    return array;
}

const arr = createArray();
arr[0]();
arr[1]();


// Activity 4 : Module Pattern
// Task 6 ::
function TaskModule(){
    let tasks = [];
    return {
        addTask : function(task){
            tasks.push(task);
        },
        removeTask : function(task){
            let index = tasks.indexOf(task);
            if(index !== -1){
                tasks.splice(index, 1);
            }
        },
        allTasks : function(){
            return tasks;
        }
    }
}

const taskManager = TaskModule();
taskManager.addTask("task 1")
taskManager.addTask("task 2")
taskManager.removeTask("task 1")
console.log(taskManager.allTasks())



// Activity 5 : Memorization
// Task 7 :: 
function memorizeFib(fun){
    let cache = {};
    return function(n){
        if(cache[n] !== undefined){
            console.log("Returning From Cache");
            return cache[n];
        }
        console.log("Calculating Result");
        const res = fun(n);
        cache[n] = res;
        return res;
    }
}

function fib(n){
    if(n<=1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

const memorizeFibo = memorizeFib(fib)
console.log(memorizeFibo(5));
console.log(memorizeFibo(10));
console.log(memorizeFibo(15));

// Task 8 ::
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memorizeFib(factorial);
  console.log(memoizedFactorial(5)); // Logs: 120
  console.log(memoizedFactorial(5)); // Logs: 120 (result is cached)