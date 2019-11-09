/*Fronts
Add Front
Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.*/

class Node { 
    constructor(value) 
    { 
        this.value = value; 
        this.next = null;
    } 
}

class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 

    addFront(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
        return this;
    }

/*Remove Front
Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If the list is empty, return null.*/

    removeFront() {
        const node = this.head;

        if (node) {
        this.head = node.next;
        }
        this.size--;
        return this;
    }

    /* Front
    Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If the list is empty, return null.*/

    front() {
        return this.head ? this.head.value : null;
        if (this.head) {
        return this.head.value;
        } else {
        return null;
        }
    }

    isEmpty() {
        return this.head === null;

        if (this.head === null) {
        return true;
        } else {
        return false;
        }
    }
}
const list = new LinkedList();
list.addFront(11).addFront(9).addFront(5);
list.removeFront();
console.log(list.front());
console.log(list.isEmpty());
console.log(list);