// Algorithms challenge

// Day 18

// Activity 1 : Sorting Algorithms
// Task 1 ::
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr.length-i-1;j++){
         if(arr[j] > arr[j+1]){
             let temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp;
         }
     }
    }
    return arr;
 }
 console.log(bubbleSort([7,5,3,6,8,1]));

//  Task 2 ::
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++){
             if(arr[j] < arr[minIndex]){
                 minIndex = j;
             }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
console.log(selectionSort([9,6,8,4,2])); 

// Task 3 ::
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([5,3,7,6,2]));



// Activity 2 : Searching Algorithms
// Task 4 ::
function linearSearch(arr, element){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === element){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1,2,3,4,5], 3));

// Task 5 ::
function binarySearch(arr, element){
    let low = 0;
    let high = arr.length-1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] === element){
            return mid;
        }else if(arr[mid] < element){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5], 3));



// Activity 3 : String Algorithms
// Task 6 ::
function checkOccurence(str){
    let obj = {};
    for(let i=0;i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]]++;
        }else{
            obj[str[i]] = 1;
        }
    }
    return obj;
}
console.log(checkOccurence("occurence"));

// Task 7 ::
function subStrwithoutRep(str){
    let obj = {};
    let start = 0;
    let maxLen = 0;
    for(let i=0;i<str.length;i++){
        if(obj[str[i]] >= start){
            start = obj[str[i]] + 1;
        }
        obj[str[i]] = i;
        maxLen = Math.max(maxLen, i-start+1);
    }
    return maxLen;
}
console.log(subStrwithoutRep("abcabcbb"));



// Activity 4 : Array Algorithms
// Task 8 ::
function rotateArrByKthPos(arr, k){
    let n = arr.length;
    k = k % n;
    reverseArr(arr, 0, n-1);
    reverseArr(arr, 0, k-1);
    reverseArr(arr, k, n-1);
    return arr;
}
function reverseArr(arr, start, end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
console.log(rotateArrByKthPos([1,2,3,4,5], 2));

// Task 9 ::
function mergeTwoSortedArr(arr1, arr2){
    let mergedArray = [];
    let i = 0;
    let j = 0;
    // Traverse both arrays and merge them
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    // If there are remaining elements in arr1, add them
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    // If there are remaining elements in arr2, add them
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
console.log(mergeTwoSortedArr([1,3,5], [2,4,6]));