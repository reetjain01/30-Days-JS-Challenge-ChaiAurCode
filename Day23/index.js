// LeetCode Hard challenge

// Day 23

// Activity 1 : Median of Two Sorted Arrays
// Task 1 ::
function findMedianSortedArr(arr1, arr2) {
    let mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    let mid = Math.floor(mergedArr.length / 2);
    return mergedArr.length % 2 === 0 ? (mergedArr[mid - 1] + mergedArr[mid]) / 2 : mergedArr[mid];
}

// Test Cases
console.log(findMedianSortedArr([1, 3], [2])); 
console.log(findMedianSortedArr([1, 2], [3, 4])); 
console.log(findMedianSortedArr([0, 0], [0, 0])); 
console.log(findMedianSortedArr([], [1]));



// Activity 2 : Merge K sorted lists
// Task 2 ::
function mergeKLists(lists) {
    let mergedArr = [];
    for (let i = 0; i < lists.length; i++) {
        mergedArr = [...mergedArr, ...lists[i]];
    }
    return mergedArr.sort((a, b) => a - b);
}

// Test Cases
console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]));
console.log(mergeKLists([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(mergeKLists([]));
console.log(mergeKLists([[]]));




// Activity 3 : Trapping Rain Water
// Task 3 ::
function trapRainWater(height) {
    let totalWater = 0;
    for (let i = 0; i < height.length; i++) {
        let leftMax = 0;
        let rightMax = 0;
        for (let j = i; j >= 0; j--) {
            leftMax = Math.max(leftMax, height[j]);
        }
        for (let j = i; j < height.length; j++) {
            rightMax = Math.max(rightMax, height[j]);
        }
        totalWater += Math.min(leftMax, rightMax) - height[i];
    }
    return totalWater;
}

// Test Cases
console.log(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trapRainWater([4,2,0,3,2,5]));
console.log(trapRainWater([1,2,3,4,5]));
console.log(trapRainWater([5,4,3,2,1]));



// Activity 4 : N-Queens
// Task 4 ::
function solveNQueens(n) {
    let result = [];
    let board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));
    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }
    const backtrack = (row) => {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    backtrack(0);
    return result;
}

// Test Cases
console.log(solveNQueens(4));
console.log(solveNQueens(1));
console.log(solveNQueens(2));



// Activity 5 : Word ladder
// Task 5 ::
function ladderLength(beginWord, endWord, wordList) {
    let queue = [[beginWord, 1]];
    let wordSet = new Set(wordList);
    while (queue.length) {
        let [word, length] = queue.shift();
        if (word === endWord) return length;
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < 26; j++) {
                let newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
}

// Test Cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]));
console.log(ladderLength("a", "c", ["a","b","c"]));
console.log(ladderLength("hot", "dog", ["hot","dog"]));
