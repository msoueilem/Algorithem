// compute the value of m^n for any positive
// integer m and any nonnegative integer n.

function exp(m:number, n:number): number{
    if(n === 0) return 1;
    if(n === 1) return m;
    if(n % 2 == 0) return exp(m * m, n / 2)
    else return exp(m * m , n / 2) * m
}

console.log(exp(2,8))
