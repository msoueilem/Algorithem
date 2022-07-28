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
console.log(bubleSort([8,1,2,3,6,9]));