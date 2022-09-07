class BSTNode {

    public data: number;
    public left: BSTNode | null;
    public right: BSTNode | null;

    constructor(indtata: number) {
        this.data = indtata;
        this.left = null;
        this.right = null;
    }
    // get() {
    //     return this.data;
    // }
}

class BST {
    public root: BSTNode | null;
    // totalElement: number;
    // list: number[] ;
    constructor(inroot?: BSTNode){
        this.root = inroot || null;
        // this.totalElement = 0;
        // this.list = [];
    }

    // recursion insert
    // public insert(node: BSTNode | null = this.root , value: number): BSTNode{
    public insert( value: number, node: BSTNode | null = this.root ,): BSTNode{
        if(this.root === null){
            node = new BSTNode(value);
            this.root = node;
            return node;
        }
        if(node === null){
            node = new BSTNode(value);
            return node;
        } else {
            if(value < node.data) node.left = this.insert(value, node.left);
            else node.right = this.insert(value, node.right);
        return node;
        }
    }

    public search(value: number, node: BSTNode | null = this.root): BSTNode | null{
        let temp = node;
        if(temp === null) {
            console.log("Didn't found it");
            return null;
        }
        else if(temp.data === value) {
            console.log("Found it");
            console.log(temp);
            return temp;
        }
        else if( value < temp.data) return this.search(value, temp.left);
        else return this.search(value, temp.right);
    }
 
    public toString(node: BSTNode | null = this.root){
        let temp = node;
        if(temp !== null){
            this.toString(temp.left);
            console.log(temp.data);
            this.toString(temp.right);
        }
    }

    BFS(): number[] {
        let node: BSTNode  = this.root!;
        let queue: BSTNode[] = [];
        let data: number[] = [];
        queue.push(this.root!);
        while(queue.length){
            node = queue.shift()!;
            data.push(node.data);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    // getTotalElement(): string{
    //     return `Total element in the tree: ${this.totalElement}`;
    // }

    // insert(val: number) {
    //     let node = new BSTNode(val);
    //     // this.list.push(val);
    //     if (this.root === null) {
    //         this.root = node;
    //         // this.totalElement++;
    //         return this;
    //     }
    //     let temp = this.root;
    //     while (true) {

    //         if (temp.data === val) return undefined;

    //         if (temp.data < val) {
    //             if (temp.left === null) {
    //                 temp.left = node;
    //                 // this.totalElement++;
    //                 return temp;
    //             }
    //             temp = temp.left!;
    //         } else {
    //             if (temp.right === null) {
    //                 temp.right = node;
    //                 // this.totalElement++;
    //                 return temp;
    //             }
    //             temp = temp.right!;
    //         }
    //     }
    // }

    // add(val: number, node:BSTNode | null){
    //     if(node?.data === val) return;
    //     if(node!.data > val) {
    //         // node = node.left!;
    //         this.add(val,node!.left);
    //     }
    //     else {
    //         // node = node.right!;
    //         this.add(val,node!.right);
    //     }
    // }

    // find(val: number){
    //     if(this.root === null){
    //         console.log("Not found");
    //     } else {
    //     let temp = this.root;
    //     let found  = false;
    //     while(temp !== null && !found){
    //         if(temp.data === val){
    //             found = true;
    //             return temp;
    //         } else if(temp.data < val){
    //             temp = temp.left!;
    //         } else {
    //             temp = temp.right!;
    //         }
    //     }
    //     return null;
    // }
    // }
    
    // toString(){
    //     // console.log(this.list);
    //     // if(this.root === null) return "empty"; 
    //     // let temp = this.root;
    //     // let bst: number[] = [temp?.data];
    //     // while (true) {
    //     //         if (temp!.left !== null) {
    //     //             bst = [temp.left.get()].concat(bst);
    //     //         }
    //     //         temp = temp.left!;

    //     //         if (temp.right === null) {
    //     //             return temp;
    //     //         }
    //     //         temp = temp.right!;
    //     // }
    // }
}

// let bst = new BST();
// bst.add(11, bst.root);
// bst.add(12, bst.root);
// bst.add(10, bst.root);
// bst.add(14, bst.root);
// console.log(bst.find(11));

// // bst.getTotalElement();
// // console.log(bst.toString());
// bst.toString();

let root = new BSTNode(50);
root.left = new BSTNode(20);
root.right = new BSTNode(60);
let bsti =  new BST(root);
bsti.insert(40);
bsti.insert(10);
bsti.insert(30);
bsti.insert(70);
bsti.insert(80);
bsti.insert(90);
bsti.search(50)
// bsti.toString(bsti.root);
console.log(bsti.BFS());
let bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.BFS())