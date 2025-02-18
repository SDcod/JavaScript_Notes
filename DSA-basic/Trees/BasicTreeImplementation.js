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

  //using recursion we check if newNode is less than or greater than the root/current parent inside a recursive call.
  //if it is less than the current parent check if left is null then isert, if not null then apply recursion to it.
  //else if it is greater than the current parent check if right is null then isert, if not null then apply recursion to it.
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

  //In binary  tree we know that the left most node is the minimum and right most node is the maximum.

  //min function check if root has left nodes if not then root is the minimum
  //else traverse till the left most value recursively
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  //Delete
  // Here we handle three scenarios
  // 1)Deleting the Node without children (leaf node)
  //we simply search and remove the node
  // 2)Deleting the Node with one child (left or right child both)
  // we remove the node and replace it's value with child node.
  // 3)Deleting the Node with two childs
  // we replace the node value with it's inorder successor.
  // inorder successor =  (smallest node in the right subtree).

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root) {
      return root; // Node not found
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value); // Go left
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value); // Go right
    } else {
      // Case 1: No child (Leaf node)
      if (!root.left && !root.right) {
        return null;
      }

      // Case 2: One child (Left or Right)
      if (!root.left) {
        return root.right; // Replace with right child
      } else if (!root.right) {
        return root.left; // Replace with left child
      }

      // Case 3: Two children → Find inorder successor
      let successorValue = this.min(root.right);
      root.value = successorValue;
      root.right = this.deleteNode(root.right, successorValue); // Delete inorder successor
    }
    return root;
  }
}

let mytree = new tree();

mytree.insert(10);
mytree.insert(5);
mytree.insert(15);
mytree.insert(3);
mytree.insert(7);

// console.log(mytree.search(mytree.root, 3));
// console.log(mytree.search(mytree.root, 2));

// mytree.dfsPreOrder(mytree.root);
// mytree.dfsInOrder(mytree.root);
// mytree.dfsPostOrder(mytree.root);
// console.log("minimum " + mytree.min(mytree.root));
// console.log("maximum " + mytree.max(mytree.root));

mytree.bfsTraversal();
mytree.delete(5);
mytree.bfsTraversal();
