/** 151. Reverse Words in a String
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. 
 * The words in s will be separated by at least one space.
*/

function reverseWord(s: string): string {

  return s.split(" ").filter((item) => item).reverse().join(" ")

  // s.split()
  // for (let i = 0; i < s.length; i++) {

  //     if (s.charAt(i) === " ") {
  //         if (word === "")
  //             continue
  //         words.push(word)
  //         word = ""
  //     } else {
  //         if (i === s.length - 1) {

  //             word = word + s.charAt(i)
  //             words.push(word)
  //         } else {
  //             word = word + s.charAt(i)
  //         }
  //     }
  // }

  // words.reverse()
  // word = ""
  // for (const item of words) {
  //     word = word + " " + item
  // }

  // return word.trim()
};

// console.log(reverseWord("a good   example"));

/** 345. Reverse Vowels of a String
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
*/

function reverseVowels(s: string): string {
  let listChar: string[] = []
  let listVowel: string[] = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
  let result: string = ""
  let vowelMap: Map<string, string> = new Map()
  if (s === " ") return s
  for (const char of listVowel) {
    vowelMap.set(char, char)
  }
  listVowel = []
  for (const char of s) {
    if (vowelMap.has(char)) {
      listVowel.push(char)
      listChar.push("*")
    } else listChar.push(char)
  }
  listVowel.reverse()
  let index = 0
  for (let i = 0; i < listChar.length; i++) {
    if (listChar[i] === "*") {
      listChar[i] = listVowel[index++]
    }
  }

  for (const char of listChar) {
    result = result + char
  }

  return result
};

// 1446. Consecutive Characters
/**The power of the string is the maximum length of a non-empty 
 * substring that contains only one unique character.
 * Given a string s, return the power of s.
 */
function maxPower(s: string): number {
  let maxLength: number = 0
  let timeOccursOfChar: number = 1
  let currentChar: string = s[0]
  if (s.length === 1) return 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar)
      timeOccursOfChar++
    else {
      currentChar = s[i]
      timeOccursOfChar = 1
    }
    maxLength = Math.max(maxLength, timeOccursOfChar)
  }

  return maxLength
};

// console.log(maxPower("leetcode"));

// 1004. Max Consecutive Ones III
/**
 * Given a binary array nums and an integer k, 
 * return the maximum number of consecutive 1's 
 * in the array if you can flip at most k 0's.
 */
function longestOnes(nums: number[], k: number): number {
  let zerosIndex: number[] = []
  let index: number = 0
  let maxOnes: number = 0
  let flipedNums: number[] = nums.concat()

  if (nums.length === 0)
    return 0
  if (k === 0) {
    for (let item of flipedNums) {
      if (item === 1)
        index++
      else
        index = 0
      maxOnes = Math.max(index, maxOnes)
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0)
        zerosIndex.push(i)
    }
    if (zerosIndex.length < k) return nums.length
    else {

      for (let i = 0; i < k; i++) {
        flipedNums[zerosIndex[i]] = 1
      }

      for (let i = 0; i < zerosIndex.length - k + 1; i++) {

        for (let item of flipedNums) {
          if (item === 1)
            index++
          else
            index = 0
          maxOnes = Math.max(index, maxOnes)
        }
        flipedNums[zerosIndex[i]] = 0
        flipedNums[zerosIndex[i + k]] = 1
      }
    }
  }

  return maxOnes
};

function longestOne(nums: number[], k: number): number {
  let i = 0, j = 0

  for (; j < nums.length; j++) {

    if (nums[j] == 0) { k-- }
    if (k < 0) {
      if (nums[i] == 0) {
        k++
      }
      i++
    }
  }

  return j - i
}

// console.log(longestOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
// console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
// console.log(longestOnes([1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1], 8));

// 1784. Check if Binary String Has at Most One Segment of Ones
/**
 * Given a binary string s ​​​​​without leading zeros, 
 * return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.
 */

function checkOnesSegments(s: string): boolean {
  let counter: number = 0
  let segmentTimes: number = 0
  let overAllOnes: number = 0
  if (s.length < 2)
    return s[0] === "1"
  if (s.length === 2)
    return s[0] === "1" || s[1] === "1"
  for (let char of s) {
    if (char === "1") {
      counter++
      overAllOnes++
    }

    else {

      counter = 0
      if (counter > 0)
        segmentTimes++
    }

    if (counter === 2)
      return true
  }
  console.log(overAllOnes, segmentTimes);

  return false || (overAllOnes === 1 && segmentTimes === 0)
};

function checkOnesSegment(s: string): boolean {
  let counter: number = 0
  let lastOne: number = 0
  let index: number = 0
  while (index < s.length) {
    // console.log(`index: ${index} lastOne: ${lastOne} counter: ${counter}`);

    if (s[index] === "1") {
      if (counter > 0 && index > lastOne + 1) return false
      counter++
      lastOne = index
    }
    index++
  }

  return true
};

// console.log(checkOnesSegment("110"));

// 860. Lemonade Change
/**
 * At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you 
 * and order one at a time (in the order specified by bills). 
 * Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. 
 * You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
 * Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, 
return true if you can provide every customer with the correct change, or false otherwise.
 */

function lemonadeChange(bills: number[]): boolean {
  let fiveBillCount = 0
  let tenBillCount = 0
  if (bills.length === 0) return true
  for (const bill of bills) {
    if (bill === 5) {
      fiveBillCount++
    } else if (bill === 10) {
      if (fiveBillCount === 0) return false
      fiveBillCount--
      tenBillCount++
    } else {
      let hasThreeFive = fiveBillCount > 2
      let hasTenAndFive = fiveBillCount > 0 && tenBillCount > 0

      // if( !hasTenAndFive && !hasThreeFive ) return false

      if (hasTenAndFive) {
        fiveBillCount--
        tenBillCount--
      } else if (hasThreeFive) {
        fiveBillCount -= 3
      } else {
        return false
      }

    }
  }
  return true
};

// 191. Number of 1 Bits
/**
 * Write a function that takes an unsigned integer and returns the 
 * number of '1' bits it has (also known as the Hamming weight).
 */

function hammingWeight(n: number): number {
  let counter = 0
  console.log(n);


  while (n !== 0) {
    console.log(n, n % 2);
    if (n % 2 === 1) {
      counter++
    }
    n = Math.floor(n / 10)
  }

  return counter
};

// console.log(hammingWeight(0o1011))

// /**
//  * Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
//  */

//  function inorderTraversal(root: TreeNode | null): number[] {
//     let inorderArray: number[] = []
//     if(root == null) inorderArray.push()
//     if(root.left == null && root.right == null) inorderArray.push(root.val)
//     inorderTraversal(root.left)
//     inorderTraversal(root.right)
//     return inorderArray
// };

// Interview in Brooklyan
// function removeDigit(num: string, k: number) : string{
//     if(k === 0) return num;
//     else if(num.length < k) return "0";
//     else {
//         let start = 0;
//         let end = 0;
//         let window = 0;
//         let scopeI = 0;
//         let scopeJ = 0;
//         let output = "";
//         while(end < k){
//             window += parseInt(num[end]);
//             end++;
//         }
//         scopeI = start;
//         scopeJ = end;
//         while(end < num.length){
//             let nextWindow = (window - parseInt(num[start]) + parseInt(num[end]));
//             console.log(window, nextWindow,  parseInt(num[start]) , parseInt(num[end]));

//             // window = Math.max(window , (window - parseInt(num[start] + parseInt(num[end]))))
//             if(window < nextWindow) {
//                 window = nextWindow ;
//                 scopeI = start;
//                 scopeJ = end;
//             }
//             start++;
//             end++;
//         }
//         console.log(scopeI,scopeJ);

//         for (let i = 0; i < num.length; i++) {
//             if(i>= scopeI && i<=scopeJ) continue;
//             output = output + num[i];
//         }
//         return output;
//     }
// }

// console.log(removeDigit("1243219",3));

// 1291. Sequential Digits
/**
 * An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.
 */
function sequentialDigits(low: number, high: number): number[] {
  let lowLength: number = getLength(low);
  let highLength: number = getLength(high);
  let digits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let results: number[] = [];
  let window: string = "";
  while (lowLength <= highLength) {
    for (let i = 0; i < digits.length; i++) {
      window = window + digits[i];
      for (let j = i + 1; j < i + lowLength; j++) {
        window = window + digits[j];
      }
      let nwidnowd = Number(window);
      if (nwidnowd <= high && nwidnowd >= low) {
        results.push(nwidnowd);
      }
      window = "";
    }
    lowLength++;
  }
  return results;
};
function getLength(item: number): number {
  let counter: number = 0;
  while (item > 0) {
    item = Math.floor(item / 10);
    counter++;
  }
  return counter;
}
// console.log(sequentialDigits(100,300));

// 832. Flipping an Image
/**
 * Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
 */

function flipAndInvertImage(image: number[][]): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < image.length; i++) {
    let element = image[i];
    element = flip(element);
    element = invert(element);
    result.push(element);
  }
  return result;
}
function flip(item: number[]): number[] {
  let result = item;
  return result.reverse();
}
function invert(item: number[]): number[] {
  let result = item;
  return result.map(i => (i === 0 ? 1 : 0));
}

// console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));

// 1137. N-th Tribonacci Number
/**
 * The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.
 */

// Dynamic programing with Memo-ization TOP-UP
function tribonacci(n: number, memo: any = {}): number {
  if (memo[n] !== undefined) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  let res = tribonacci(n - 3, memo) + tribonacci(n - 2, memo) + tribonacci(n - 1, memo);
  memo[n] = res;
  return res;
};

// Dynamic programing with Tabulation BOTTOM-UP
function tribonacci2(n: number): number {
  if (n <= 2) return 1;
  let trios: number[] = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    trios[i] = trios[i - 3] + trios[i - 2] + trios[i - 1];
  }
  return trios[n];
};

// console.log(tribonacci2(100));
// 1108. Defanging an IP Address
function defangIPaddr(address: string): string {
  return address.split(".").join("[.]");
};

// 671. Second Minimum Node In a Binary Tree
/**
 * Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.
 * Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
 * If no such second minimum value exists, output -1 instead.
 */
 function findSecondMinimumValue(root: TreeNode | null): number {
  if(root === null) return -1;
  if(root.left === root.right) return -1;
  
  let left = root!.left!.val;
  let right = root!!.val;
  
  if(root!.left!.val === root.val) left = findSecondMinimumValue(root.left);
  if(root!.right!.val === root.val) right = findSecondMinimumValue(root.right);
  
  if(left != -1 && right != -1) return Math.min(left, right);
  if(left != -1) return left;
  else return right;
};

// console.log(findSecondMinimumValue([2,2,5,null,null,5,7]));
