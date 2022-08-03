class MyNode {
    next: MyNode | null;
    data: any;
    constructor(inData: any) {
        this.data = inData;
        this.next = null;
    }
    get() {
        return this.data;
    }
    set(inData: any) {
        this.data = inData;
    }
}
class SingleLinkedList {
    head: MyNode | null;
    tail: MyNode | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    lengt() {
        return this.length;
    }

    push(val: any) {
        let newNode: MyNode = new MyNode(val)
        if (this.head === null) {
            newNode.next = this.tail;
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp?.next !== null) {
                temp = temp?.next!;
            }
            newNode.next = this.tail;
            temp.next = newNode;
        }
        this.length++;
    }
    pushHead(val: any) {
        let newNode: MyNode = new MyNode(val)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    
    pushTail(val: any) {
        let newNode: MyNode = new MyNode(val)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pushIndex(val: any, index: number) {
        if (index <= 0) {
            this.pushHead(val)
        } else if (index >= this.length) {
            this.pushTail(val)
        } else {
            let newNode: MyNode = new MyNode(val)
            let temp = this.head;
            let i = 0;
            while (i < index) {
                temp = temp?.next!;
                i++;
            }
            let tempNext = temp!.next;
            temp!.next = newNode
            newNode.next = tempNext!
        }
    }
    popHead() {
        let data;
        if (!this.head) {
            data = "empty"
        } else {
            data = this.head.get()
            this.head = this.head.next
            this.length--;
        }
        return data;
    }
    
    popTail() {
        let data;
        if (!this.head) {
            data = "empty"
        } else {
            let temp = this.head;
            while (temp?.next !== this.tail) {
                temp = temp?.next!;
            }
            data = this.tail;
            this.tail = temp
            this.tail.next = null
            this.length--;
        }
        return data
    }
    popIndex(val: any, index: number) {
        if (index <= 0) {
            this.pushHead(val)
        } else if (index >= this.length) {
            this.pushTail(val)
        } else {
            let newNode: MyNode = new MyNode(val)
            let temp = this.head;
            let i = 0;
            while (i < index) {
                temp = temp?.next!;
                i++;
            }
            let tempNext = temp!.next;
            temp!.next = newNode
            newNode.next = tempNext!
        }
    }

    get(val: any) {
        let temp = this.head;
        let index = 0;
        while(temp?.next){
            if(temp.get() === val){
                return `Found it @ index(${index}) with value ${typeof temp.get() === "string" ? temp.get().toUpperCase() : temp.get()}`;
            }
            temp = temp.next;
            index++;
        }
        return `Couldn't found "${val}" in the list`;
    }

    set(val: any , index: number) {
        let temp = this.head;
        let i = 0;
        while(temp?.next){
            if(i === index){
                console.log(`Changing "${temp.get()}" to new value "${val}" at index ${index}`);
                
                temp.set(val);
                return;
            }
            temp = temp.next;
            i++;
        }
        return `Couldn't found this index(${index}) in the list`;
    }

    reverse() {
        if(this.head === null){
            console.log("List empty");
        } else {
            
        let temp = this.head;
        while(temp.next){
            let current = temp.next;
            temp.next = current.next;
            current.next = this.head;
            this.head = current;
        }
        this.tail = temp;
        this.tail.next = null;
    
    }
    }

    toString(): string {
        let resultString: string = ""
        let index: number = 0;
        if (this.head === null) {
            resultString = "empty";
        } else {
            resultString = `${this.head.get()} (${index++})`
            let tempHead = this.head;
            while (tempHead!.next !== null) {
                resultString = `${resultString} -> ${tempHead?.next.get()} (${index++})`
                tempHead = tempHead!.next;
            }
        }
        return resultString;
    }
}



let mylist: SingleLinkedList = new SingleLinkedList();
// mylist.reverse()
mylist.pushTail("Hello")
mylist.pushTail("World")
mylist.pushTail("!")
mylist.pushHead("It")
mylist.popHead()
mylist.pushIndex("is",2)
mylist.pushTail("a")
mylist.popTail()
mylist.pushIndex("program",100)
mylist.pushTail("to")
mylist.pushHead("test")
mylist.pushHead(123435)
mylist.pushTail("typescript")
mylist.pushIndex("language", 0)
// console.log(mylist.toString())
// console.log("reversing....");
// mylist.reverse()
// console.log(mylist.toString())

let numberList: SingleLinkedList = new SingleLinkedList()
numberList.pushHead(1)
numberList.pushHead(2)
numberList.pushHead(3)
numberList.pushHead(4)
numberList.pushHead(5)
console.log(numberList.toString())
console.log("reversing....");
numberList.reverse()
console.log(numberList.toString())


// console.log("My list Length: ",mylist.lengt())

// console.log(mylist.get(123435));
// mylist.set(45,5)
// console.log(mylist.get("language"));
// console.log(mylist.get(45));
