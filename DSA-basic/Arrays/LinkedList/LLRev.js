// linked list implementation

// //append(at end) , prepend(at begining) , display, size, insertAt(index), remove(value), search(element)

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//     }

//     // add node at end
//     append(data){
//       const newNode = new Node(data);

//         if(!this.head){
//             this.head = newNode;
//         }else{
//             let current = this.head;
//             while(current.next){
//                 current = current.next;
//             }
//             current.next = newNode;
//         }

//     }

//     //add at the head node
//     prepend(data){
//         const newNode = new Node(data);

//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     //get current size of the Linkedlist.
//     size(){
//         let count = 0;
//         let current = this.head;
//         while(current){
//             count++;
//             current = current.next;
//         }
//         return count;
//     }

//     //get the elements in an array
//     display(){
//         if(this.size() <= 0){
//             return "list is empty"
//         }

//       let current = this.head;
//         let res = [];
//         while(current){
//             res.push(current.data)
//             current = current.next;
//         }
//         return res;
//     }

//     delete(data){
//         if(this.size() == 0){
//             return "empty list"
//         }

//         let current = this.head;
//         while(current.next && current.next.data !== data){
//             current = current.next;
//         }

//         if(current.next){
//             current.next = current.next.next;
//         }
//     }
// }

// let ml = new LinkedList();

// ml.append(12)
// ml.append(13)
// ml.append(14)
// ml.prepend(11)
// ml.delete(12)

// console.log(ml.size())
// console.log(ml.display())
