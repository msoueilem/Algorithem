class BSTNode {
    data: any;
    left: BSTNode | null;
    right: BSTNode | null;
    constructor(indtata: any) {
        this.data = indtata;
        this.left = null;
        this.right = null;
    }
    get() {
        return this.data;
    }
}

class BST {
    root: BSTNode | null;
    totalElement: number;
    constructor(){
        this.root = null;
        this.totalElement = 0;
    }

    getTotalElement(): string{
        return `Total element in the tree: ${this.totalElement}`;
    }

    insert(val: number, root: BSTNode | null = this.root){
        let node = new BSTNode(val);
        if(!this.root) this.root = node;
        else{
            if(this.root.get() > val){
                this.insert(val, root?.left);
            } else 
            this.insert(val, root?.right);
        }
        this.totalElement++;
    }


}