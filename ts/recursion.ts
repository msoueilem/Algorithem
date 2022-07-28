
function isPalindrome(word : string) : boolean{
    // add whatever parameters you deem necessary - good luck!
    // console.log(word.substring(1, word.length -1));
    if(word.length === 0 || word.length === 1) return true;
    if(word.charAt(0) !== word.charAt(word.length - 1)) return false;
    return isPalindrome(word.substring(1, word.length -1));
}

    // console.log(isPalindrome('tacocat')) // false
    // console.log(isPalindrome('awesome')) // false
    // isPalindrome('foobar') // false
    // isPalindrome('tacocat') // true
    // isPalindrome('amanaplanacanalpanama') // true
    // isPalindrome('amanaplanacanalpandemonium') // false

function flatten(inputArray: any[]) : number [] {
    // add whatever parameters you deem necessary - good luck!
    if(inputArray.length === 0) {
        return []
    }
    if(typeof inputArray[0] === "object") 
        return flatten(inputArray[0]).concat(flatten(inputArray.slice(1)));
    else 
        return [inputArray[0]].concat(flatten(inputArray.slice(1)));
}
    // return inputArray[0].concat(flatten(inputArray.slice(1)));

//   console.log("hello")
// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

function capitalizeFirst (inputArray: string []): string [] {
    // add whatever parameters you deem necessary - good luck!
    if(inputArray.length === 1) return [inputArray[0].charAt(0).toUpperCase() + inputArray[0].substring(1)]
    return [inputArray[0].charAt(0).toUpperCase() + inputArray[0].substring(1)].concat( capitalizeFirst( inputArray.slice(1) ))
}
  
  console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
  
function nestedEvenSum (obj: any): number {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  function helperNest(inobj: any){
      if(Object.keys(obj).length === 0) return 0
  Object.keys(obj).forEach(function(key) {
      if(typeof obj[key] === "number"){
          sum += obj[key]
      } else if(typeof obj[key] === "object"){
        helperNest(obj[key])
      }
  })
}
  return sum;
}


let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

let obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10