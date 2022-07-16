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

let time1 = performance.now()
minSort([5,6,2,4,1,3])
let time2 = performance.now()
console.log(`Time elapsed: ${time2-time1} ms`)


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