// Applying frequency
function sameUdemyFrequency(array1, array2) {
    if (array1.length != array2.length)
        return false
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (const val of array1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (const val of array2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    
    for (let key of frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)){
            return false
        } 
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }

    
    return true;
}


console.log(sameUdemyFrequency([1,2,3], [4,1,9]))
