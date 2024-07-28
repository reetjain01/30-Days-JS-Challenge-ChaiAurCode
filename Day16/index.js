// Recursion challenge

// Day 16

// Activity 1 : Basic Recursion
// Task 1 ::
const factorial = (num) => {
    if(num <= 1){
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(3))
console.log(factorial(-3))
console.log(factorial(0))
console.log(factorial(5))


// Task 2 ::
const fibonacci = (num) => {
    if(num <= 1){
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(4))
console.log(fibonacci(7))
console.log(fibonacci(10))



// Activity 2 : Recursion with Arrays
// Task 3 ::
const sumOfArray = (arr) => {
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + sumOfArray(arr.slice(1));
}
console.log(sumOfArray([1,2,3,4,5]))

// Task 4 ::
function maxElement(arr){
    if(arr.length === 1){
        return arr[0];
    }
    return Math.max(arr[0], maxElement(arr.splice(1)));
}
console.log(maxElement([1,2,3,4,25]))


// Activity 3 : String Manipulation with Recursion
// Task 5 ::
function reverseString(str){
    if(str === ""){
        return "";
    }
    return reverseString(str.substr(1)) + str[0];
}
console.log(reverseString("hello"))
console.log(reverseString("hello world"))

// Task 6 ::
function isPalindrome(str){
    if(str.length <= 1){
        return true;
    }
    if(str[0] !== str[str.length - 1]){
        return false;
    }
    return isPalindrome(str.substr(1, str.length - 2));
}
console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))



// Activity 4 : Recursive Search
// Task 7 ::
function binarySearchRec(arr, num){
    if(arr.length === 0){
        return false;
    }
    let mid = Math.floor(arr.length / 2);
    if(arr[mid] === num){
        return true;
    }
    if(arr[mid] > num){
        return binarySearchRec(arr.slice(0, mid), num);
    }
    return binarySearchRec(arr.slice(mid + 1), num);
}
console.log(binarySearchRec([1,2,3,4,5,6,7,8,9], 5))
console.log(binarySearchRec([1,2,3,4,5,6,7,8,9], 10))

// Task 8 ::
function countOccELem(arr, num){
    if(arr.length === 0){
        return 0;
    }
    let count = 0;
    if(arr[0] === num){
        count++;
    }
    return count + countOccELem(arr.slice(1), num);
}
console.log(countOccELem([1,2,2,3,1,2,-4,5,3], 2))


