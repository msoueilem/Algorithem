/*
 * Write a function called same, which accepts two arrays
 * The function should return true if every value in the array has it's 
 * corresponding value squared in th e second array, The frequency of values must be the same.
*/

// my answer inspired by haditto
function sameBySort(array1: number[], array2: number[]) {

    if (array1.length != array2.length)
        return false

    let array2of1: number[] = []

    for (const element of array1) {
        let squared = element ** 2
        array2of1.push(squared)
    }

    array2of1.sort()
    let array2of2 = array2.concat().sort()

    for (let i = 0; i < array2of1.length; i++) {
        if (array2of1[i] !== array2of2[i]) {
            return false
        }
    }

    return true;
}

/**
 * Given two strings, write a function dto determine if the
 * second string is an anagram of the first, Am amagram is
 * a word, pase of name formed by rearranging the letters
 * of another, such as cinema, formed from iceman.
*/

function validAnagram(word: string, anagram: string): boolean {

    if (anagram.length !== word.length)
        return false
    let wordFrq: string[] = []
    let anagramFrq: string[] = []

    for (const char of word) {
        wordFrq.push(char)
    }
    for (const char of anagram) {
        anagramFrq.push(char)
    }
    wordFrq.sort()
    anagramFrq.sort()
    for (let i = 0; i < wordFrq.length; i++) {
        if (wordFrq[i] !== anagramFrq[i])
            return false;
    }
    return true
}

console.log(sameBySort([1, 1, 1, 1, 5, 3, 2, 3], [4, 1, 1, 9, 25, 1, 9]))
console.log(validAnagram("cincama","iccnama"));









// I did but it work only if the numbers are allined
function same(array1: any, array2: any): boolean {
    if (array1.length != array2.length)
        return false
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] != array1[i] * array1[i])
            return false;
    }
    return true;
}

// function sameMap(array1: any, array2: any): boolean {
//     if (array1.length != array2.length)
//         return false
//         arr1:Map<string,number>  = Map()
//     return true;
// }

// --- Frequency counter by haditto
function sameFrq(array1: number[], array2: number[]) {
    const array2FrqMap: Map<number, number> = new Map();

    for (const item of array2) {
        array2FrqMap.set(item, (array2FrqMap.get(item) || 0) + 1)
    }


    for (const item of array1) {
        const squaredItem = item ** 2;
        if (array2FrqMap.has(squaredItem)) {
            const newValue = array2FrqMap.get(squaredItem)! - 1;
            array2FrqMap.set(squaredItem, newValue);
        }
    }

    return [...array2FrqMap.values()].filter((item): boolean => {
        return item !== 0;
    }).length === 0;

}







// From udemy
function sameUdemy(array1: any, array2: any): boolean {
    if (array1.length != array2.length)
        return false
    for (let i = 0; i < array1.length; i++) {
        let correctIndex = array2.indexOf(array1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        array2.splice(correctIndex, 1)
        console.log(array2)
    }
    return true;
}

// Applying frequency
// function sameUdemyFrequency(array1: any, array2: any): boolean {
//     if (array1.length != array2.length)
//         return false
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for (const val of array1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for (const val of array2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }

//     console.log(frequencyCounter1)
//     console.log(frequencyCounter2)
//     // for (let key of frequencyCounter1) {
//     //     if(!(key ** 2 in frequencyCounter2)){
//     //         return false
//     //     } 
//     //     if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//     //         return false
//     //     }
//     // }


//     return true;
// }


// console.log(same([1, 2, 3], [2, 4, 9]))
// console.log(sameUdemy([1, 2, 3], [4, 1, 9]))
// console.log(sameUdemyFrequency([1, 2, 3], [4, 1, 9]))