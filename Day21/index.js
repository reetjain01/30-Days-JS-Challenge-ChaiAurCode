// Leetcode Easy challenge

// Day 21

// Activity 1 : Two Sum
// Task 1 ::  
function twoSum(arr, target){
    for(let i=0; i<arr.length;i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i,j];
            }
        }
    }
    return [];
}
// Test Cases
// console.log(twoSum([2,7,11,15], 9)); 
// console.log(twoSum([3,2,4], 6)); 
// console.log(twoSum([3,3], 7)); 




// Activity 2 : Reverse Integer
// Task 2 ::
function reverseInteger(num){
    // handle for negative sign
    let sign = num < 0 ? -1 : 1;
    num = Math.abs(num);
    let reversedNum = 0;
    while(num !== 0){
        let remainder = num % 10;
        reversedNum = reversedNum * 10 + remainder;
        num = Math.floor(num/10);
    }
    return sign * reversedNum;
}
// Test Cases
console.log(reverseInteger(123));
console.log(reverseInteger(-456));
console.log(reverseInteger(1000));



// Activity 3 : Palindrome 
// Task 3 ::
function isPalindrome(num){
    let reversedNum = reverseInteger(num);
    return num === reversedNum;
}
// Test Cases
console.log(isPalindrome(12321));
console.log(isPalindrome(123456));




// Activity 4 :
// Task 4 ::
function ListNode(val, next=null){
    this.val = val;
    this.next = next;
}

function mergeTwoLL(list1, list2){
    let dummy = new ListNode(0);
    let current = dummy;
    while(list1 !== null && list2!== null){
        if(list1.val < list2.val){
            current.next = list1;
            list1 = list1.next;
        }
        else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return dummy.next;
}

function createLL(arr){
    let head = new ListNode(arr[0]);
    let current = head;
    for(let i = 0; i < arr.length; i++){
        let newNode = new ListNode(arr[i]);
        current.next = newNode;
        current = newNode;
    }
    return head;
}

function printLL(head){
    let output = '';
    while(head !== null){
        output += head.val + ' ';
        head = head.next;
    }
    return output;
}

const list1 = createLL([1,2,3]);
const list2 = createLL([4,5,6]);
console.log(printLL(mergeTwoLL(list1, list2)));



// Activity 5 : Valid Parentheses
// Task 5 ::
function validParentheses(str){
    let stack = [];
    let map = {')':'(', '}':'{', ']':'['};
    for(let i = 0; i < str.length; i++){
        if(Object.values(map).includes(str[i])){
            stack.push(str[i]);
        }
        else if(map[str[i]] && stack.length && stack[stack.length - 1] === map[str[i]]){
            stack.pop();
        }
        else{
            return false;
        }
    }
    return stack.length === 0;
}
// Test the function
console.log(validParentheses("()]")); 
console.log(validParentheses("()[]")); 
console.log(validParentheses("()([])")); 
console.log(validParentheses("([)]")); 







