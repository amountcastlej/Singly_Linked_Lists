// Add Front
// write a method that accepts a value and creates a new node
// assign it to the list head
// return a pointer to the new head node
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class SLL {
//     constructor(head = null) {
//         this.head = null;
//     }
//     // a method for adding nodes to the front of our list
//     addtoFront(value) {
//         var newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//     }
// }

// let sll = new SLL();
// sll.addtoFront(8);
// console.log(sll);


// Remove Front
// write a method to remove the head node 
// return the new list head node
// If list is empty, return null
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class SLL {
//     constructor(head = null) {
//         this.head = head;
//     }
//     addFront(value){
//         var newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//     }
//     removeFront(){
//         if(this.head){
//             this.head = this.head.next;
//         }
//         return this.head;
//     }
// }

// let sll = new SLL();
// sll.addFront(5);
// sll.addFront(4);
// sll.removeFront();
// console.log(sll);


// Front
// Write a method to return the value (not the node) at the head of the list
// // if the list is empty, return null 
// class Node {
//     constructor(value){
//         this.value = value; 
//         this.next = null; 
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     Front(){
//         if(this.head){
//             return this.head.value;
//         }
//         return null;
//     }
// }

// Contains
// Add a method contains (value) to your SLL clas, which is given a parameter
// Return a boolean (true/false); true if the list possesses a node that contains the provided value
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }
// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     contains(value) {
//         var temp = this.head;
//         while(temp) {
//             if (temp.value == value) {
//                 return true;
//             }
//             temp = temp.next;
//         }
//         return false
//     }
// }

// Length
// Create a new SLL method length() that returns number of nodes in that list
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     addNode(value) {
//         var newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

// length() {
//     var runner = this.head;
//     var count = 0;

//     while (runner){
//         count++;
//         runner = runner.next;
//     }
//     return count
// }
// }
// let sll = new SLL();
// sll.addNode(15);
// sll.addNode(8);
// console.log(sll.length());

// Display
// Create display() that returns a string containing all list values
// Build what you wish console.log(myList) did
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     addNode(value) {
//         var newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     display(){
//         var runner = this.head;
//         var listValues = [];

//         while(runner.next) {
//             listValues.push(String(runner.value));
//             runner = runner.next;
//         }
//         listValues.push(String(runner.value));
//         return listValues;
//     }
// }
// let sll = new SLL();
// sll.addNode(19);
// sll.addNode(26);
// console.log(sll.display());

// Min
// Create min(node) to return list's smallest value
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     addFront(value){
//         var newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//     }
//     min() {
//         var min = this.head.value;
//         var runner = this.head;

//         while (runner){
//             if(min > runner.value){
//                 min = runner.value;
//             }
//             runner = runner.next;
//         }
//         return min;
//     }
// }

// let sll = new SLL();
// sll.addFront(8);
// sll.addFront(12);
// console.log(sll.min());


// Max
// create max(node) to return lists largest val
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     addFront(value) {
//         var newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//     }
//     max() {
//         var max = this.head.value;
//         var runner = this.head;
//         while(runner){
//             if(max < runner.value){
//                 max = runner.value;
//             }
//             runner = runner.next;
//         }
//         return max;
//     }
// }
// let sll = new SLL();
// sll.addFront(9);
// sll.addFront(15);

// console.log(sll.max());


// Average
// create average() to return average val
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }

//     addFront(value) {
//         var newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head
//     }
// average(){
//     var sum = 0;
//     var count = 0;
//     var runner = this.head;
//     while(runner){
//         count++;
//         sum += runner.value;
//         runner = runner.next;
//     }
//     var avg = sum / count;
//     return avg;
// }
// }

// let sll = new SLL();
// sll.addFront(3);
// sll.addFront(5);
// sll.addFront(9);
// sll.addFront(10);
// console.log(sll.average());