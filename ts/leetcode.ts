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

console.log(reverseWord("a good   example"));

/** 345. Reverse Vowels of a String
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
*/

function reverseVowels(s: string): string {
    let listChar: string[] = []
    let listVowel: string[] = ["a", "A","e", "E","i", "I","o", "O","u","U"]
    let result: string = ""
    let vowelMap: Map<string,string> = new Map()
    if(s === " ") return s
    for (const char of listVowel) {
        vowelMap.set(char,char)
    }
    listVowel = []
    for (const char of s) {
        if(vowelMap.has(char)){
            listVowel.push(char)
            listChar.push("*")
        } else listChar.push(char)
    }
    listVowel.reverse()
    let index = 0
    for (let i = 0 ; i < listChar.length ; i++) {
        if(listChar[i] === "*"){
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
    if(s.length === 1) return 1
    for( let i = 1; i < s.length ; i++){
        if(s[i] === currentChar)
            timeOccursOfChar++
        else{
            currentChar = s[i]
            timeOccursOfChar = 1
        }
        maxLength = Math.max(maxLength,timeOccursOfChar)
    }
    
    return maxLength
};

console.log(maxPower("leetcode"));
