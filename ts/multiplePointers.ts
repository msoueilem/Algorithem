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

console.log(sumZero([-5, -4, -1, 1, 2, 7, 9]))