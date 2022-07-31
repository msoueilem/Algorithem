class node {
    next: node | null;
    data: any;
    constructor(indata: any) {
        this.data = indata;
        this.next = null;
    }
    getData() {
        return this.data;
    }
}
class singleLinkedList {
    head: node | null;
    tail: node | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    lengt() {
        return this.length;
    }

    push(val: string) {
        let newNode: node = new node(val)
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
    pushHead(val: string) {
        let newNode: node = new node(val)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    
    pushTail(val: string) {
        let newNode: node = new node(val)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pushIndex(val: string, index: number) {
        if (index <= 0) {
            this.pushHead(val)
        } else if (index >= this.length) {
            this.pushTail(val)
        } else {
            let newNode: node = new node(val)
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
            data = this.head.getData()
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
    popIndex(val: string, index: number) {
        if (index <= 0) {
            this.pushHead(val)
        } else if (index >= this.length) {
            this.pushTail(val)
        } else {
            let newNode: node = new node(val)
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

    toString(): string {
        let resultString: string = ""
        let index: number = 0;
        if (this.head === null) {
            resultString = "empty";
        } else {
            resultString = `${this.head.getData()} (${index++})`
            let tempHead = this.head;
            while (tempHead!.next !== null) {
                resultString = `${resultString} -> ${tempHead?.next.getData()} (${index++})`
                tempHead = tempHead!.next;
            }
        }
        return resultString;
    }
}



let mylist: singleLinkedList = new singleLinkedList();
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
mylist.pushTail("typescript")
mylist.pushIndex("language", 0)
console.log(mylist.toString())
console.log("My list Length: ",mylist.lengt())

