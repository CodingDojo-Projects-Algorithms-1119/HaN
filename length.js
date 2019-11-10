/* Contains
Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.head === null;
        if (this.head === null) {
        return true;
        } else {
        return false;
        }
    }
    addFront(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
        return this;
    }
    contains(val){
        if (this.isEmpty()){
            return false;
        }
        let finder = this.head;

        while (finder) {
            if (finder.value === val) {
                return true;
            }
            console.log('node has value', finder);
            finder = finder.next;
        }
        return false;
    } 
    /*Length
    July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList. */
    length(){
        let len = 0;
        let runner = this.head;
        while (runner){
            len++;
            runner = runner.next;
        }
        return len;
    }
}
const list = new LinkedList();
console.log(list.contains(11));
list.addFront(11).addFront(9).addFront(5);
console.log(list);
console.log(list.contains(11));
console.log('length of list',list.length());