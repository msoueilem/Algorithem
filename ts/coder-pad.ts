/**
 * 1.	Group of N students sitting in a circular loop. Counting numbers from 1 to K and the 
 * kth student gets eliminated. Process is repeated till only one student remains. We need 
 * to write a code which will accept two inputs namely N and K and need to determine which 
 * student will be the last man standing.
 * o	 For e.g. N=6, K=2,
 * o	 Output = 5
 */

function kthStudent(N: number, K: number) : number {
    let Ns: number[] = []
    for (let i = 1; i <= N; i++) {
        Ns.push(i);
    }
    let counter = 1;
    let round = 0;
    while(Ns.length > 1){
        console.log(counter, round++, Ns)
        counter = counter + K - 1; 
        Ns = mySlice(Ns,counter);
        // if(round === 4) Ns.length = 1;
        console.log(Ns.length !== 1);
    }
    return Ns[0];
}

function mySlice(arr: number[], index: number): number[] {
    console.log("before moding" ,index, arr.length)
    if(index > arr.length){
        index = index % arr.length;
    }
    console.log(index, arr);
    if(index === 0) return arr.slice(1);
    else if(index === arr.length) return arr.slice(0,arr.length-1)
    else if(index === arr.length - 1) return arr.slice(0,arr.length-2)
    else return arr.slice(0,index-1).concat(arr.slice(index,arr.length));
}

// let my = [ 1, 2, 3, 4, 5, 6 ];
// my = mySlice(my,14);
// console.log(my);
console.log(kthStudent(6,2));
