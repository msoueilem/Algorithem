class QueueNode {
    data: any;
    next: QueueNode | null;
    constructor(indtata: any) {
        this.data = indtata;
        this.next = null;
    }
    get() {
        return this.data;
    }
}

class Queue {
    first: QueueNode | null;
    last: QueueNode | null;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    getSize(): string{
        return `Queue size: ${this.size}`;
    }

    enqueue(val: any) {
        let node = new QueueNode(val);
        if (this.first === null) {
            this.first = node;
            this.last = this.first;
        } else {
            node.next = this.first;
            this.first = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.first === null) {
            console.log("Can't dequeue, queue is Empty");
        } else {
            let current = this.first;
            this.first = current.next;
            current.next = null;
            console.log(`Dequeue: ${current.get()} from first`);
            this.size--;
        }
    }

    toString(): string {
        if (this.first === null) {
            return "Queue is empty, nothing to print"
        } else {

            let temp = this.first;
            let result = ""
            if (temp.next === null) {
                result = `[First] "${temp?.data}" (0) [Last]`;
            } else {
                result = `[First] "${temp?.data}" (0)`;
                temp = temp.next!;
                let index = 1;
                while (temp?.next) {
                    result = `${result} -> "${temp.get()}" (${index})`
                    index++;
                    temp = temp.next;
                }
                if (temp) result = `${result} -> "${temp.get()}" (${index}) [Last]`
            }
            return result;
        }
    }
}

let myqueue = new Queue();
myqueue.enqueue(1);
myqueue.enqueue(2);
myqueue.enqueue(3);
myqueue.enqueue(4);
myqueue.enqueue(5);
myqueue.enqueue(6);

console.log(myqueue.toString());
console.log(myqueue.getSize());
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();
console.log(myqueue.toString());
console.log(myqueue.getSize());

