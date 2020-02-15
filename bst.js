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
        if (!this.root) {
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
            else if (newNode.val > current.val) {
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

    BFS = () => {
        if (!this.root) return null
        //create a queue to process 
        let queue = [this.root]
        let visited = []
        let current
        while (queue.length) {
            current = queue.shift()
            //keep checking until there are no more children
            if (current.left !== null) queue.push(current.left)
            if (current.right !== null) queue.push(current.right)
            //add the value of the node to our visited array
            visited.push(current.val)
        }
        return visited
    }

    DFSPreO = () => {
        let visited = []
        let current = this.root

        const traverse = (c) => {
            visited.push(c.val)
            if (c.left !== null) traverse(c.left)
            if (c.right !== null) traverse(c.right)
        }
        traverse(current)
        return visited
    }

    DFSPostO = () => {
        let visited = []
        let current = this.root

        const traverse = (c) => {
            if (c.left !== null) traverse(c.left)
            if (c.right !== null) traverse(c.right)
            visited.push(c.val)
        }
        traverse(current)
        return visited
    }

    DFSInO = () => {
        let visited = []
        let current = this.root

        const traverse = (c) => {
            if (c.left !== null) traverse(c.left)
            visited.push(c.val)
            if (c.right !== null) traverse(c.right)
        }
        traverse(current)
        return visited
    }


} //end BST

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(20)

// bst.insert(30)
// bst.insert(20)
// bst.insert(60)
// bst.insert(10)
// bst.insert(40)

console.log(bst.BFS()) //(5) [30, 20, 60, 10, 40]


