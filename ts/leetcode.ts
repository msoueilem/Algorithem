/**
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. 
 * The words in s will be separated by at least one space.
*/

function reverseWord(s: string): string {

    let frequencyWord: string[] = []
    let word: string = ""
    for (let i = 0; i < s.length; i++) {

        if (s.charAt(i) === " ") {
            if (word === "")
                continue
            frequencyWord.push(word)
            word = ""
        } else {
            if (i === s.length - 1) {

                word = word + s.charAt(i)
                frequencyWord.push(word)
            } else {
                word = word + s.charAt(i)
            }
        }
    }

    frequencyWord.reverse()
    word = ""
    for (const item of frequencyWord) {
        word = word + " " + item
    }

    return word.trim()
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