function countCharUdemy(word: string): void {
    // create output return value
    let returnObject: any = {}
    // check our input
    // for (let i = 0; i < word.length; i++) {
    for (let char of word) {

        char = char.toLocaleLowerCase()
        let charCode = char.charCodeAt(0)
        // let char = word.charAt(i).toLocaleLowerCase()
        // assign data to our ouput
        // if (/[a-z]|[0-9]]/.test(char)) {
        if ((charCode > 96 && charCode < 123) || (charCode > 47 && charCode < 58)) {
            returnObject[char] = ++returnObject[char] || 1
            // if (returnObject[char] > 0) {
            //     returnObject[char]++;
            // } else {
            //     returnObject[char] = 1
            // }
        }

    }

    // return output
    let resultObject = JSON.stringify(returnObject)
    console.log(resultObject)
}


function countCharachterOfString(word: string): void {

    // lowercase the word
    let lowerCaseWord = word.toLowerCase()

    // create an object to store date
    let result: Map<string, number> = new Map()

    // start counting and storing
    for (let i = 0; i < lowerCaseWord.length; i++) {
        let currentChar = lowerCaseWord.charAt(i)
        // if(currentChar>112 || currentChar.co<97)
        if (/^[a-z0-9]/.test(currentChar)) {
            if (result.has(currentChar)) {
                let count = result.get(currentChar)!
                result.set(currentChar, count + 1)
            } else {
                result.set(currentChar, 1)
            }
        }
    }

    // display the object
    // let sortedResult = new Map([...result.entries()].sort())
    // let resultString:string = "{ "
    // sortedResult.forEach((value, key, map) => { resultString = resultString + ` ("${key}", ${value}) `})
    // resultString = resultString + " }"
    // console.log(resultString)

    // diplay in Hady way
    let mapKeys: any = Array.from(result.keys()).sort().map(item => ` ("${item}", ${result.get(item)}) `)
    console.log(`{ ${mapKeys.join(",")}}`);


    // console.log(result.entries())


}

console.log("Count charachter of a word inspired by udemy teacher")
// countCharUdemy("Hello everyone welcome in my youtube channel")
countCharUdemy("0123456789abcdefghijklmnopqrstuvwxyz")
console.log("Count charachter of a word inspired by haditto")
// countCharachterOfString("Hello everyone welcome in my youtube channel")
countCharachterOfString("0123456789abcdefghijklmnopqrstuvwxyz")


// let time1 = performance.now()
// minSort([5,6,2,4,1,3])
// let time2 = performance.now()
// console.log(`Time elapsed: ${time2-time1} ms`)