// LeetCode Medium challenge

// Day 22

// Activity 1 : Add Two Numbers
// Task 1 ::
class ListNode{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(list1, list2){
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    while(list1 !== null || list2 !== null){
        let sum = 0;
        if(list1 !== null){
            sum += list1.val;
            list1 = list1.next;
        }
        if(list2 !== null){
            sum += list2.val;
            list2 = list2.next;
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    if(carry > 0){
        current.next = new ListNode(carry);
    }
    return dummy.next;
}

function printLL(head){
    let current = head;
    while(current !== null){
        console.log(current.val);
        current = current.next;
    }
}

// Test Cases
const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);
const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);
printLL(addTwoNumbers(list1, list2));



// Activity 2 : Longest Substring without Repeating Characters
// Task 2 ::
function lengthOfLongestSubstring(s){
    let start = 0;
    let maxLength = 0;
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            start = Math.max(map.get(s[i]) + 1, start);
        }
        maxLength = Math.max(maxLength, i - start + 1);
        map.set(s[i], i);
    }
    return maxLength;
}

// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));




// Activity 3 : Container with most water
// Task 3 ::
function maxArea(height){
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right){
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        if(height[left] < height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxArea;
}

// Test Cases
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));
console.log(maxArea([4,3,2,1,4]));
console.log(maxArea([1,2,1]));



// Activity 4 : 3Sum
// Task 4 ::
function threeSum(nums){
    let result = [];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++){
        if(i === 0 || (i > 0 && nums[i] !== nums[i - 1])){
            let low = i + 1;
            let high = nums.length - 1;
            let sum = 0 - nums[i];
            while(low < high){
                if(nums[low] + nums[high] === sum){
                    result.push([nums[i], nums[low], nums[high]]);
                    while(low < high && nums[low] === nums[low + 1]){
                        low++;
                    }
                    while(low < high && nums[high] === nums[high - 1]){
                        high--;
                    }
                    low++;
                    high--;
                }
                else if(nums[low] + nums[high] < sum){
                    low++;
                }
                else{
                    high--;
                }
            }
        }
    }
    return result;
}

// Test Cases
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([0,0,0,0]));



// Activity 5 : Group Anagrams
// Task 5 ::
function groupAnagrams(strs){
    let map = new Map();
    for(let str of strs){
        let key = [...str].sort().join('');
        if(!map.has(key)){
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return [...map.values()];
}

// Test Cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]));

