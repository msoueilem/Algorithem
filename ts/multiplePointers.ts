/**
 * Write a function called sumZero which accepts a sorted array of integers. 
 * The function should find the first pair where the sum is 0. 
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

function sumZero(array: number[]): number[] {


    for (let i = 0, j = array.length - 1; i < array.length && i < j;) {

        if (array[i] + array[j] == 0)
            return [array[i], array[j]]
        else {
            if (array[i] + array[j] > 0)
                if (array[i] > 0)
                    return []
                else
                    j--
            else
                if (array[j] < 0)
                    return []
                else
                    i++

        }
    }

    return []
}

/**
 * Implement a function called countUniqueValues, which accepts a sorted array, 
 * and counts the unique values in the array. 
 * There can be negative numbers in the array, but it will always be sorted.
 * */

function countUniqueValues(inputArray: number[]): number {
    let start: number = 0, end: number = 0, result = 0, inputLength = inputArray.length - 1
    if (inputArray.length === 0) {
        return 0;
    } else
        while (start < inputArray.length && result < 10) {
            // console.log(start, end, result, inputArray.length);

            if (inputArray[start] === inputArray[end]) {
                start++
                result++
            } else {
                if (end === inputLength)
                    end = ++start + 1
                else
                    end++
            }
        }
    return result
}

function countUniqueValue(inputArray: number[]): number {
    let start: number = 0, end: number = 1
    if (inputArray.length === 0) {
        return 0;
    } else
        while (end < inputArray.length) {

            if (inputArray[start] !== inputArray[end]) {
                inputArray[++start] = inputArray[end++]
            } else {
                
                    end++
            }
        }
    return start+1
}

/**
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. 
 * The words in s will be separated by at least one space.
*/

function reverseWords(s: string): string {

    let frequencyWord: string[] = []
    let word: string = ""

    for (let i = 0; i < s.length; i++) {
        console.log(s.charAt(i));


        if (s.charAt(i) === " " ) {
            if(word === "")
             continue
            console.log(word,s.charAt(i),i);
            // if (i === s.length - 1) {
                
            //     word = word + s.charAt(i)
            //     frequencyWord.push(word)
            // } else {
                frequencyWord.push(word)
                word = ""
            // }
        } else {
            // word = word + s.charAt(i)
            if (i === s.length - 1) {
                
                word = word + s.charAt(i)
                frequencyWord.push(word)
            } else {
                word = word + s.charAt(i)
                // frequencyWord.push(word)
                // word = ""
            }
        }
    }
    console.log(frequencyWord);

    frequencyWord.reverse()
    word = ""
    for (const item of frequencyWord) {
            word = word + " " + item
    }
    // word = frequencyWord[frequencyWord.length - 1]

    // for (let i = frequencyWord.length - 2; i > 0; i--) {
    //     word = word + " " + frequencyWord[i]
    // }

    return word.trim()
};

// console.log(reverseWords("a good   example"));



function sumZeroUdemy(array: number[]): number[] {

    let left: number = 0
    let right: number = array.length - 1
    let sum: number = 0

    while (left < right) {

        sum = array[left] + array[right]

        if (sum === 0) {
            return [array[left], array[right]]
        } else sum > 0 ? right-- : left++

    }

    return []
}


// console.log(sumZeroUdemy([-9, 1, 2, 7, 9]))
console.log(countUniqueValue([-3,-3,0,1,1,2, 2,2, 7, 9,9,12]))