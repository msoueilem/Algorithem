class StackNode {
    data: any;
    next: StackNode | null;
    previous: StackNode | null;
    constructor(indtata: any) {
        this.data = indtata;
        this.next = null;
        this.previous = null;
    }
    get() {
        return this.data;
    }
}

class Stack {
    head: StackNode | null;
    tail: StackNode | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: any) {
        let node = new StackNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.length++;
        console.log(this.toString())
    }

    pop() {
        if (!this.tail) {
            console.log("Empty stack");
        } else {

            if (this.head === this.tail) {
                console.log(this.tail!.get() + "\nEnd of Stack");
                this.tail = null;
                this.head = null;
                this.length--;
            } else {
                console.log(this.tail.get())
                let nextTail = this.tail.previous
                nextTail!.next = null;
                this.tail.previous = null;
                this.tail = nextTail;
                this.length--;
            }
            
        }
    }

    toString() {
        let result = "[ ";
        let temp = this.head;
        let i = 0;
        while (i < this.length) {
            result = `${result} "${temp?.get()}"`
            temp = temp!.next;
            i++;
        }
        return result + " ]"
    }
}

let mystack = new Stack()
mystack.push("hello")
mystack.pop();
mystack.push("hello1")
mystack.push("hello2")