function minSort(array: any): void {

    for (let i = 0; i < array.length; i++) {

        let minIndex = i
        let min = array[minIndex]
        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < min) {
                min = array[j]
                minIndex = j
            }
        }
        if (i != minIndex) {
            swap(array, i, minIndex)
        }
    }
    console.log(array)
}

function swap(array: any, firstIndex: number, secondIndex: number): void {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
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
        if (result.has(currentChar)) {
            let count = result.get(currentChar)!
            result.set(currentChar, count + 1)
        } else {
            result.set(currentChar, 1)
        }
    }

    // display the object
    // let sortedResult = new Map([...result.entries()].sort())
    // let resultString:string = "{ "
    // sortedResult.forEach((value, key, map) => { resultString = resultString + ` ("${key}", ${value}) `})
    // resultString = resultString + " }"
    // console.log(resultString)

    // diplay in Hady way
    let mapKeys:any = Array.from(result.keys()).sort().map( item => ` ("${item}", ${result.get(item)}) `)
    console.log(`{ ${mapKeys.join(",")}}`);
    

    // console.log(result.entries())


}

countCharachterOfString("Hello everyone welcome in my youtube channel")


// let time1 = performance.now()
// minSort([5,6,2,4,1,3])
// let time2 = performance.now()
// console.log(`Time elapsed: ${time2-time1} ms`)


// function findMin(array: any): number{
//     let min = array[0]
//     let index = 0
//     for(let i = 0; i < array.length ; i++){
//         if(array[i] < min){
//             min = array[i]
//             index = i
//         }
//     }
//     return index;
// }