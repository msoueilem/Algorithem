
function numbersPattern(n: number): void {
    for (let i = 0; i <= n; i += 2) {
        if (i == checkPowerWithString(i + "")) {
            console.log(i)
        }
    }
}

function checkPowerWithString(n: string): number {
    if (n.length % 2 != 0) {
        return -1;
    }
    if (n.length == 2) {
        return poweringNumberWithString(n)
    }
    return checkPowerWithString(n.substring(0, n.length - 2)) * poweringNumberWithString(n);
}

function poweringNumberWithString(n: string): number{
    return Math.pow(parseInt(n.charAt(n.length - 2)), parseInt(n.charAt(n.length-1)));
}


let t1 = performance.now();
numbersPattern(10000000)
let t2 = performance.now();


console.log(`Time elapsed:\n${(t2-t1)/1000} s\n${(t2-t1)} ms`)
