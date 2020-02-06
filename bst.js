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
        //declare new node
        let newNode = new Node(val)
        let current = this.root

        //if it's an empty tree then simply add
        if(!this.root) {
            this.root = newNode
            return this
        } 
        while (true) {
            // check to avoid duplicated entries
            if (newNode.val === current.val) return undefined
            if (val < current.val) {
                if (current.left === null) {
                    //traverse down the tree by setting the child to be the new current
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

    find(val) {
        let current = this.root
        const findVal = (c) => {
            //base cases to break out of the recursive calls
            if (c === null) return false
            if (c.val === val) {
                return true
            }
            if (val < c.val) {
                c = c.left
                return findVal(c)
            } 
            if (val > c.val) {
                c = c.right
                return findVal(c)
            }
        }
        return findVal(current)
    }
} //end BST

const bst = new BinarySearchTree()
bst.insert(30)
bst.insert(20)
bst.insert(60)


