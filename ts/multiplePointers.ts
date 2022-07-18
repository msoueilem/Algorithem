function sumZero(array: number[]): number[] {


    for (let i = 0, j = array.length - 1; i < array.length && i <= j;) {

        if (array[i] + array[j] == 0)
            return [array[i], array[j]]
        else {
            if (array[i] + array[j] > 0)
                if (array[i] > 0)
                    return []
                else
                    j--
            else
                if (array[j] < 0)
                    return []
                else
                    i++

        }
    }

    return []
}

function sumZeroUdemy(array: number[]): number[] {

    let left: number = 0
    let right: number = array.length - 1
    let sum: number = 0

    while (left < right) {

        sum = array[left] + array[right]

        if (sum === 0) {
            return [array[left], array[right]]
        } else sum > 0 ? right-- : left ++
    
    }

    return []
}


console.log(sumZeroUdemy([-9, 1, 2, 7, 9]))