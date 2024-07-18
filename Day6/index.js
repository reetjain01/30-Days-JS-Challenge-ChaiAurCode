// Arrays challenge

// Day 6

// Activity 1 : Array Creation and Access
// Task 1 ::
const sampleArr = [1,2,3,4,5];
console.log(sampleArr)

// Task 2 ::
const sampleArr2 = [1,2,3,4,5];
let firstElem = sampleArr2[0];
let lastElem = sampleArr2[sampleArr2.length - 1];
console.log(firstElem, "is first element and", lastElem,"is last element")


// Activity 2 : Array Methods (Basic)
// Tas 3 ::
const arr1 = [1,2,3,4];
arr1.push(5);
console.log(arr1)

// Task 4 ::
const arr2 = [1,2,3,4,5];
arr2.pop();
console.log(arr2)

// Task 5 ::
const arr3 = [1,2,3,4,5];
arr3.shift();
console.log(arr3)

// Task 6 ::
const arr4 = [1,2,3,4,5];
arr4.unshift(0);
console.log(arr4)


// Activity 3 : Array Methods (Intermediate)
// Task 7 ::
const arr5 = [1,2,3,4,5];
let newArr = arr5.map((elem, index) => {
    return elem+elem;
})
console.log(newArr)

// Task 8 ::
const arr6 = [1,3,4,2,5,6,7,0];
let evenArr = arr6.filter((elem, index) => {
    return elem % 2 == 0;
})
console.log(evenArr)

// Task 9 ::
let arr7 = [1,2,3,4,5];
let sum = arr7.reduce((prev, curr, index) => {
    return prev + curr;
})
console.log(sum)


// Activity 4 : Array Iteration
// Task 10 :: 
let Arr1 = [1,2,3,4,5];
for(let i=0; i<Arr1.length; i++){
    console.log(Arr1[i]);
}

// Task 11 ::
let Arr2 = [1,2,3,4,5];
Arr2.forEach((elem, index) => {
    console.log(elem);
})


// Activity 5 : Multi-dimensional Array
// Task 12 ::
const TwoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  for (let i = 0; i < TwoDArray.length; i++) {
    for (let j = 0; j < TwoDArray[i].length; j++) {
      console.log(TwoDArray[i][j]);
    }
  }

// Task 13 ::
const TwoDArray1 = [
    [5, 10, 15],
    [20, 25, 30],
    [35, 40, 45],
  ];
  console.log(TwoDArray1[0][1]);