class MyDoublyNode {
    next: MyDoublyNode | null;
    previous: MyDoublyNode | null;
    data: any;
    constructor(inData: any) {
        this.data = inData;
        this.next = null;
        this.previous = null;
    }
    get() {
        return this.data;
    }
    set(inData: any) {
        this.data = inData;
    }
    eraseNext() {
        let next = this.next;
        next!.previous = null;
        this.next = null;
    }
    erasePrevious() {
        let previous = this.previous;
        previous!.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    head: MyDoublyNode | null;
    tail: MyDoublyNode | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getLength() {
        return this.length;
    }
    pushHead(val: any) {
        let newNode: MyDoublyNode = new MyDoublyNode(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } if(this.head === this.tail) {
            newNode.next = this.head;
            this.head = newNode;
            this.head.next = this.tail;
            this.tail.previous = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }
    
    pushTail(val: any) {
        let newNode: MyDoublyNode = new MyDoublyNode(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } if(this.head === this.tail) {
            newNode.previous = this.tail;
            this.tail = newNode;
            this.tail.previous = this.head;
            this.head.next = this.tail;
        } else {
            this.tail!.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
            this.length++;
        }
    }
    pushIndex(val: any, index: number) {
        if (index <= 0) {
            console.log(`Pushing ${val} to head at ${index} while length is ${this.getLength()}`);
            this.pushHead(val)
        } else if (index >= this.length) {
            console.log(`Pushing ${val} to tail at ${index} while length is ${this.getLength()}`);
            
            this.pushTail(val)
        } else {
            console.log(`Pushing ${val} to position ${index} while length is ${this.getLength()}`);
            
            let newNode: MyDoublyNode = new MyDoublyNode(val)
            let temp = this.head;
            let i = 0;
            while (i < index - 1) {
                temp = temp?.next!;
                i++;
            }
            
            let tempNext = temp!.next
            temp!.next = newNode;
            tempNext!.previous = newNode 
            newNode.previous = temp;
            newNode.next = tempNext;
            this.length++;
        }
    }
    popHead() {
        if(!this.head){
            console.log("empty");
        } else {
            console.log("pop head...\n",this.toString());
            let currentHead = this.head.next;
            this.head.next = null;
            currentHead!.previous = null;
            this.head = currentHead;
            this.length--;
        }
    }
    
    popTail() {
        if(!this.head){
            console.log("empty");
        } else {
            console.log("pop tail...\n",this.toString());
            let currentTail = this.tail;
            this.tail = currentTail!.previous;
            this.tail!.eraseNext();
            this.length--;
        }
    }
    popIndex(index: number) {
        if (index <= 0) {
            this.popHead()
        } else if (index >= this.length-1) {
            this.popTail()
        } else {
            console.log(`Poping from index(${index})`);
            this.toString();
            
            let temp = this.head;
            let i = 0;
             do{
                temp = temp?.next!;
                i++;
            }while (i < index - 1)
            let losingNode = temp!.next;
            let tempNext = losingNode!.next;
            if(!losingNode?.next) {
                this.popTail()
            } else if(!losingNode?.previous) { 
                this.popHead()
            } else { 
                tempNext!.previous = temp;
                temp!.next = tempNext;
                losingNode!.next = null;
                losingNode!.previous = null;
            }   
        }
    }

    get(val: any) {
        let temp = this.head;
        let index = 0;
        while(temp!.next){
            if(temp!.get() === val) {
                console.log(`Found it at index:`);
                
                return index;
            }
            temp = temp!.next;
            index++;
        }
        console.log(`didn't found it`);
        
        return 0;
    }

    set(val: any , index: number) {
        this.pushIndex(val,index);
    }

    reverse() {
        let temp = this.head;
        let i = 0;
        while(i < this.getLength()){
            let current = temp;
            temp = temp!.next;
            console.log(temp?.get() , this.tail?.get() , current?.get() );
            
            current!.next = current!.previous;
            current!.previous = temp;
            i++
        }
        // temp!.next = this.tail!.previous;
        // temp!.previous = null;
        
        this.tail = this.head;
        this.head = temp;
    }

    toString(): string {
        let resultString: string = ""
        let index: number = 0;
        if (!this.head) {
            resultString = "empty";
        } else {
            resultString = `${this.head.get()} (${index++})`
            let tempHead = this.head;
            while (tempHead!.next) {
                resultString = `${resultString} <-> ${tempHead?.next.get()} (${index++})`
                tempHead = tempHead!.next;
            }
        }
        return resultString;
    }
}

// let myDoublyList: DoublyLinkedList = new DoublyLinkedList();
// mylist.reverse()
// mylist.pushTail("Hello")
// mylist.pushTail("World")
// mylist.pushTail("!")
// mylist.pushHead("It")
// mylist.popHead()
// mylist.pushIndex("is",2)
// mylist.pushTail("a")
// mylist.popTail()
// mylist.pushIndex("program",100)
// mylist.pushTail("to")
// mylist.pushHead("test")
// mylist.pushHead(123435)
// mylist.pushTail("typescript")
// mylist.pushIndex("language", 0)
// console.log(mylist.toString())
// console.log("reversing....");
// mylist.reverse()
// console.log(mylist.toString())

let numList: DoublyLinkedList = new DoublyLinkedList()
numList.pushIndex(1,0)
numList.pushIndex(2,1)
numList.pushIndex(3,2)
// numList.popHead()
numList.pushIndex(4,3)
// numList.popTail()
numList.pushIndex(5,4)
// numList.popIndex(2);
console.log(numList.toString())
numList.reverse()
console.log(numList.toString())
// console.log(numList.get(2))
// console.log(numList.get(5))
// console.log("reversing....");
// numList.reverse()
// console.log(numList.toString())


// console.log("My list Length: ",mylist.lengt())

// console.log(mylist.get(123435));
// mylist.set(45,5)
// console.log(mylist.get("language"));
// console.log(mylist.get(45));