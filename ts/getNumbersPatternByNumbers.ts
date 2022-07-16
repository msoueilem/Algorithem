
function numbersPatternWN( n: number): void {
    for (let i = 0; i <= n; i += 2) {
        if (i == checkPowerWithNumber(i)) {
            console.log(i)
        }
    }
}


function checkPowerWithNumber(n: number): number {
    if (checkNumberLength(n) % 2 != 0) {
        return -1;
    }
    if (checkNumberLength(n) == 2) {
        return poweringLastTwoDigitOfNumber(n)
    }
    return checkPowerWithNumber(Math.floor(n/100)) * poweringLastTwoDigitOfNumber(n);
}

function poweringLastTwoDigitOfNumber(n: number): number{
    let lastTwoDigit = n % 100
    return Math.pow(Math.floor(lastTwoDigit / 10),lastTwoDigit % 10);
}


function checkNumberLength(n: number): number{
    const floorN = n = Math.floor(n/10)
    if(floorN == 0) return 1;
    return 1 + checkNumberLength(floorN);
}


console.log("Applying number manipilation")
// let p1 = performance.now();
// numbersPatternWN(10000000)
// let p2 = performance.now();
let n = 12345
console.log(poweringLastTwoDigitOfNumber(n))
console.log(n);



// let i = 423423
// console.log(`Checking length of ${i} : ${checkNumberLength(i)}`)

// console.log(`Time elapsed:\n${(p2-p1)/1000} s\n${(p2-p1)} ms`)
