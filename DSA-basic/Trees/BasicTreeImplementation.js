//Non linear DS
//does not contain any loops or cycles
// A tree is a hierarchical data structure that consists of nodes. Each node contains:

// Data – The value stored in the node.
// Children – References (or pointers) to other nodes.
// A Binary Tree is a special type of tree where each node has at most two children (left and right).
// Traversals -
//    DFS(Depth First Search):- preorder, inorder, postorder
//    BFS(Breadth First Search)

// Key Tree Terminologies:
// Root: The topmost node in a tree.
// Parent: A node that has children.
// Child: A node that is connected to another node (parent).
// Leaf: A node with no children.
// Depth: Distance from the root to the node.
// Height: The longest path from a node to a leaf.

//Binary Tree implementation (max 2 childs)
//Define a node class
class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Define a tree class
class tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new node(value);
    //check if tree is empty, yes add the value to root. else insert it at appropriate position using insertNode()
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode); //recursive function
    }
  }

  //using recursion we check if newNode is less than or greater than the root/current root inside a recursive call.
  //if it is less than the current root check if left is null then isert, if not null then apply recursion to it.
  //else if it is greater than the current root check if right is null then isert, if not null then apply recursion to it.
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  //Search method(recursion)
  //check if tree is empty by checking if root is null, if yes return null
  //check if root/current root is equal to value, if yes return it
  //check if value is less than root, if yes travel through left sub tree.
  //else value will be greater than root travel through right sub tree.

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (value == root.value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  //DFS preorder steps
  //1.read node value
  //2.visit left subtree
  //3.visit right subtree
  dfsPreOrder(root) {
    if (root) {
      console.log(root.value);
      this.dfsPreOrder(root.left);
      this.dfsPreOrder(root.right);
    }
  }

  //DFS inorder steps
  //1.visit left subtree
  //2.read node value
  //3.visit right subtree
  dfsInOrder(root) {
    if (root) {
      this.dfsInOrder(root.left);
      console.log(root.value);
      this.dfsInOrder(root.right);
    }
  }

  //DFS postorder steps
  //1.visit left subtree
  //2.visit right subtree
  //3.read node value
  dfsPostOrder(root) {
    if (root) {
      this.dfsPostOrder(root.left);
      this.dfsPostOrder(root.right);
      console.log(root.value);
    }
  }

  //BFS Search/ levelOrder
  // create a queue
  // read node's value
  // as long as node exist in queue
  //   dequeue the node form queue
  //   read node's value
  //   Enqueue the node's left child if exist
  //   Enqueue the node's right child if exist
  bfsTraversal() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
}

let mytree = new tree();

mytree.insert(10);
mytree.insert(5);
mytree.insert(15);
mytree.insert(3);
mytree.insert(7);

console.log(mytree.search(mytree.root, 3));
console.log(mytree.search(mytree.root, 2));

// mytree.dfsPreOrder(mytree.root);
// mytree.dfsInOrder(mytree.root);
// mytree.dfsPostOrder(mytree.root);
mytree.bfsTraversal();
