// Buble sort
function bubleSort(arr: number[]) : number[] {
    let len = arr.length;
    let noSwap = false;
    // let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        noSwap = true
        for (let j = 0; j < len-1; j++) {
            // if(i === j) continue;
            // console.log(arr, arr[j+1],arr[j], "counter:",++counter)
            if(arr[j] > arr[j+1]) {
                [arr[j] , arr[j+1]] = [arr[j+1],arr[j]];
                noSwap = false;
            }
        }
        // console.log(i,noSwap);
        if(noSwap) return arr;
        len--
    }
    return arr;
}

// console.log(bubleSort([54,0,6,19,53,2,64,10,7,12,5]));
// console.log(bubleSort([54,0,7,12,5]));
// console.log(bubleSort([8,1,2,3,6,9]));

// Selection Sort
function selectionSort(arr: number[]): number[]{
    let counter = 0
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            console.log(arr,arr[i],arr[j],"counter:",++counter);
            
            if(arr[j] < arr[i]) [arr[j] , arr[i]] = [arr[i],arr[j]];
        }
    }
    return arr;
}

// console.log(selectionSort([54,0,6,19,53,2,64,10,7,12,5]));
// console.log(selectionSort([54,0,7,12,5]));
// console.log(selectionSort([8,1,2,3,6,9]));

// insert Sort
function insertSort(arr: number[]): number[]{
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        if(arr[i] < arr[i - 1]){
            
            for (var j = i - 1; j >= 0 && arr[j+1] < arr[j]; j--) {
                if(arr[j+1] < arr[j]) arr[j+1] = arr[j];
            }
            arr[j+1] = currentValue;  
        }
    }
    return arr;
}

// console.log(insertSort([8,1,2,3,6,9]));

// merge Sort
function mergeSort(arr: number[]): number[]{
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merging(left, right);
}

// merging
function merging(arr1: number[], arr2: number[]): number[]{
    let arr:number[] = []
    let i = 0;
    let j = 0;
    

    // console.log("arr1",arr1,arr2,"arr2");
    while( i < arr1.length && j < arr2.length){
        // console.log(arr);
        // console.log((arr1[i] < arr2[j]) , arr1[i] ,i, arr2[j],j);
        
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i])
            i++
        } else{
            arr.push(arr2[j])
            j++
        }
    }
    if(i < arr1.length){
        for (; i < arr1.length; i++) {
            // console.log("i",i);
            arr.push(arr1[i])
        }
    }
    if(j < arr2.length){
        for (; j < arr2.length; j++) {
            // console.log("j",j);
            arr.push(arr2[j])
        }
    }
    console.log("arr",arr);
    
    return arr;
}

// console.log(merging([3,6,9],[4,5,8]));
// console.log(merging([19],[53]));

// console.log(mergeSort([54,0,6,19,53,2,64,10,7,12,5]));
// console.log(mergeSort([54,7,12,5]));
// console.log(mergeSort([8,1,2,3,6,9]));


// quick Sort
function quickSort(arr: number[], left = 0 , right = arr.length - 1): number[]{
    
    if(left < right) {
        let pivotIndex = pivotCall(arr, left, right)
        // console.log(arr, `Left: ${left} right: ${right} PivotIndex: ${pivotIndex}`);
        // left
        quickSort(arr, left , pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

// pivot 
function pivotCall(arr: number[], start: number , end = arr.length - 1): number{
    let index: number = start;
    for (let i = start+1; i <= end; i++) {
        // console.log(arr, index, "index[]", arr[index], i, "i[]", arr[i]);
        if(arr[start] > arr[i]) {
            index++
            [arr[index] , arr[i]] = [arr[i] , arr[index]]
            // let temp = arr[index];
            // arr[index] = arr[i];
            // arr[i] = temp;
        } 
    }
    [arr[index] , arr[start]] = [arr[start] , arr[index]]
    // let temp = arr[index];
    // arr[index] = arr[start];
    // arr[start] = temp;
    // console.log(arr);
    return index;
}
// console.log(pivotCall([9,64,10,7,12,5], 0));

// console.log(quickSort([54,0,6,19,53,2,64,10,7,12,5]));
// console.log(quickSort([54,7,12,5,6]));
// console.log(quickSort([8,1,2,3,6,9]));


// getDigit
function getDigit(item: number, index: number): number{
    let newNum: string = item + "";
    let numLength: number = newNum.length;
    let position: number = 0;
    if(numLength < index) return -1;
    while(position < numLength){
        let temp = Math.floor(item/10) * 10;
        console.log(temp,item);
        
        // here to get index of number equal to index
        // if(item - temp === index){
        //     return position;
        // }

        // here to get the number that has index [index]
        if(position === index){
            return item - temp;
        }
        position++;
        item = Math.floor(item/10);
    }
    return -1;
}

// console.log(getDigit(65812593629383,1));


// getdigi
function getdigi(number: number , index: number): number{
    return Math.floor( Math.abs(number) / Math.pow(10, index) ) % 10;
}

// console.log(getdigi(65812593629383,1));

// digiCount
function digiCount(number: number): number{
    if(number === 0 ) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

console.log(digiCount(65812593629383));

// mostDigitCounts
function mostDigitCounts(arr: number[]): number{
    let max:number = -Infinity;
    for (const item of arr) {
        if(max < digiCount(item))
            max = digiCount(item)
    }
    return max;
}




// radixSort
function radixSort(arr: number[]): number[]{
    let maxDigitCount: number = mostDigitCounts(arr);
    for (let i = 0; i < maxDigitCount; i++) {
        let bucketDigit = Array.from({length:10} , () => [])
        for (let j = 0; j < arr.length; j++) {
            let index = getdigi(arr[j],i);
            bucketDigit[index].push(arr[j])
        }   
        arr = [].concat(...bucketDigit);
    }
    return arr;
}

console.log(radixSort([54,0,6,19,53,2,64,10,7,12,5]));
// console.log(radixSort([54,7,12,5,6]));
// console.log(radixSort([8,1,2,3,6,9]));

