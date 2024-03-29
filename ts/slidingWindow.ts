/**
 * This pattern involves creating a window which can either be an array or number from one position to another
 * Depending on a certain condition, the window either increases or closes (and a new window is created)
 * Very useful for keeping track of a subset of data in an array/string etc.
 */



/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */
function maxSubarraySum(inputArray: number[], inputNumber: number): number {
    let result: number = 0
    if (inputNumber > inputArray.length || inputArray.length === 0 || inputNumber === 0)
        return 0
    else {
        // for (let i = 0; i < inputNumber; i++) {
        //     result += inputArray[i]
        // }
        result = -Infinity

        for (let i = 0; i < inputArray.length - inputNumber + 1; i++) {
            let sum = 0
            for (let j = 0; j < inputNumber; j++) {
                sum += inputArray[j + i]
            }
            if (sum > result) result = sum
        }
    }
    return result
}

function maxSubarraySums(inputArray: number[], inputNumber: number): number {

    let maxWindowSum: number = 0
    let currentWindowSum: number = 0
    let windowSize: number = inputNumber
    let windowStart: number = 0, windowEnd: number = 0

    if (windowSize > inputArray.length || inputArray.length === 0 || windowSize === 0)
        return 0
    else {

        for (let i = 0; i < windowSize; i++) {
            maxWindowSum += inputArray[i]
        }
        windowStart = 0
        windowEnd = windowSize - 1
        currentWindowSum = maxWindowSum

        for (let i = 0; i < inputArray.length - windowSize; i++) {
            currentWindowSum = currentWindowSum - inputArray[i] + inputArray[i + windowSize]
            // maxWindowSum = Math.max(currentWindowSum, maxWindowSum)
            if (currentWindowSum > maxWindowSum) {
                windowStart = i
                windowEnd = i + windowSize
                maxWindowSum = currentWindowSum
            }
        }
    }
    console.log(`Max Window Sum: ${maxWindowSum}\nWindo Start: ${windowStart}\nWindow End: ${windowEnd}\nWindow Size: ${windowSize}`);

    return maxWindowSum
}

// console.log(maxSubarraySums([4, 2, 1, 6, 2], 4));
// console.log(maxSubarraySums([2,6,9,2,1,8,5,6,3], 3));

function maxSubarraySumtwo(array: number[], n: number): number {
    // add whatever parameters you deem necessary - good luck!
    let start = 0
    let end = n
    let max = 0

    if (n > array.length) {
        return 0
    } else {
        while (start < end) {
            max += array[start]
            start++
        }
        start = 0
        let newMax = max
        for (let i = end; i < array.length; i++) {

            newMax = newMax - array[start++] + array[end++]
            if (newMax > max) {
                max = newMax
            }
        }
    }
    return max
}

// console.log(maxSubarraySumtwo([100, 200, 300, 400], 2));
// console.log(maxSubarraySumtwo([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(maxSubarraySumtwo([-3, 4, 0, -2, 6, -1], 2));
// console.log(maxSubarraySumtwo([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
// console.log(maxSubarraySumtwo([2, 3], 3));
// 100,200,300,400 2
// 1,4,2,10,23,3,1,0,20 4
// -3,4,0,-2,6,-1 2
// 3,-2,7,-4,1,-1,4,-2,1 2
// 2,3 3

function minSubArrayLen(inArray: number[], n: number) : number{
    let start: number = 0
    let end: number = 2
    let subSum: number = inArray[0]
    for (const item of inArray) {
        if(item >= n) return 1
    }
    while(end < inArray.length){
        subSum = subSum - inArray[start++] + inArray[end++]
        if(subSum >= n ){
            return end-start
        }
    }
    return end-start
}


console.log(minSubArrayLen([2,3,1,2,4,3],9))