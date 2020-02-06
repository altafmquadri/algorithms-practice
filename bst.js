class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
        let current = this.root
        if(!this.root) {
            this.root = newNode
            return this
        } 
        while (true) {
            if (newNode.val === current.val) return undefined
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                } 
                current = current.left
            } 
            else if (newNode.val > current.val ) {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }


    
} //end BST

const bst = new BinarySearchTree()
bst.insert(30)
bst.insert(20)
bst.insert(10)
//trying to add 60 and it it loops and I can't figure out where the loop is

