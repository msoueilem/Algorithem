// Linear Search
function searching(inputArray : any[], elements: any) : number{
    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] === elements)
            return i;
    }
    return -1;
}

// console.log(searching([1,2,3,4,5,6,4], 5));

// Binary search
function binarySearching(inputArray : any[], elements: any) : number{
    let left = 0
    let right = inputArray.length - 1
    while(left < right){
        let mid = right - left
        if(inputArray[mid] === elements){
            return mid;
        } else if(inputArray[mid] < elements){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return -1;
}

// console.log(binarySearching([1,2,3,4,5,6], 5));

// Naive search
function naiveSearching(word : string, pattern: string) : number{
    let result = 0;
    let patternLength = pattern.length
    for (let i = 0; i < word.length ; i++) {

        if(word[i] === pattern[0]){
            if(word.substring(i , patternLength + i) === pattern) {
                result++;
            }
        }
    }
    return result;
}

// console.log(naiveSearching("wazomgwinomg","omg"));