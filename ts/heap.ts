class Heap{
  public heaps: number[];
  constructor(){
    this.heaps = [];
  }
  insert(element: number){
    this.heaps.push(element);
    if(this.heaps.length > 2 ) {
      // console.log("bigger than two", element);
      this.bobbleUp(element);
    } else { 
      // console.log("less than two", element);
    
      if(element > this.heaps[0]){
        this.heaps[1] = this.heaps[0];
        this.heaps[0] = element;
      }
    }
  }
  delete(){
    // if(this.heaps.length < 2) return this.heaps.pop();
    let oldHead = this.heaps[0];
    // console.log("Deleting the old head", oldHead);
    
    let head: number = this.heaps.pop()!;
    let index = 0;
    this.heaps[0] = head;
    // this.heaps = this.heaps.slice(0,this.heaps.length-1);
    // console.log("now new head is the tail",head, "and array is shrinked",this.heaps);
    
    while((2 * index + 1) < this.heaps.length){
      let left = this.heaps[2*index+1];
      let right = this.heaps[2*index+2];
      // console.log("let see children for the head, left and right",left, right);
      
      if(head > Math.max(left,right)) return oldHead;
      else{
        if(left > right){
          // console.log("swapping head with left", head, left);
          
          this.heaps[index] = left;
          this.heaps[2*index+1] = head;
          index = 2*index +1;
        } else {
          // console.log("swapping head with right", head, right);

          this.heaps[index] = right;
          this.heaps[2*index+2] = head;
          index = 2*index +2;
        }
      }
      // console.log("the heap after positioning the new head",this.heaps);
      
    }
    return oldHead;
  }
  bobbleUp(item : number) {
    let index = this.heaps.length - 1;
    let posioned = false;
    while(index > 0 && !posioned){
      let parentIndex = Math.floor((index - 1)/2);
      let parent = this.heaps[parentIndex];
      if(parent > item) posioned = true;
      else{
        this.heaps[index] = parent;
        this.heaps[parentIndex] = item;
        index = parentIndex;
      }
    }
    if(index === 1){
      if(item > this.heaps[0]){
        this.heaps[1] = this.heaps[0];
        this.heaps[0] = item;
      }
    }
  }
}

let heap = new Heap();
heap.insert(10);
// console.log(heap.heaps);
heap.insert(11);
// console.log(heap.heaps);
heap.insert(19);
// console.log(heap.heaps);
heap.insert(13);
// console.log(heap.heaps);
heap.insert(120);
// console.log(heap.heaps);
heap.insert(1);
// console.log(heap.heaps);
heap.insert(20);
// console.log(heap.heaps);
heap.insert(0);
console.log(heap.heaps);
console.log("Deleted node: ",heap.delete());
console.log("Deleted node: ",heap.delete());
console.log(heap.heaps);
