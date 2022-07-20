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

            for (let i = 0; i < zerosIndex.length - k +1; i++) {

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
			if (nums[i] == 0) { k++ }
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
    if(s.length < 2)
        return s[0] === "1"
    if(s.length === 2)
        return s[0] === "1" || s[1] === "1" 
    for(let char of s){
        if(char === "1"){
            counter++
            overAllOnes++
        }
            
        else{
            
            counter = 0
            if(counter > 0)
            segmentTimes++
        }
            
        if(counter === 2 )
            return true
    }
    console.log(overAllOnes,segmentTimes);
    
    return false || (overAllOnes === 1 && segmentTimes === 0)
};

function checkOnesSegment(s: string): boolean {
    let counter: number = 0
    let lastOne: number = 0
    let index: number = 0
    while(index < s.length){
        // console.log(`index: ${index} lastOne: ${lastOne} counter: ${counter}`);
        
        if(s[index] === "1"){
            if(counter > 0 && index > lastOne + 1) return false
            counter++
            lastOne = index
        }
        index++
    }

    return true
};

console.log(checkOnesSegment("110"));