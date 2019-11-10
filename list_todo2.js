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
    /*Display
    Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!*/
    display(){
        let runner = this.head;
        while (runner) {
            console.log(runner.value);
            runner = runner.next;
        }
        return this;
    }
    /*max(){
        let runner = this.head;
        let max = runner.value;
        while (runner) {
            if (max<runner.value){
                max = runner.value;
            }
            runner = runner.next;
        }
        return max;
    }
    min(){
        let runner = this.head;
        let min = runner.value;
        while (runner) {
            if (min>runner.value){
                min = runner.value;
            }
            runner = runner.next;
        }
        return min;
    }
    avg(){
        let runner = this.head;
        let sum = 0;
        while (runner) {
            sum += runner.value;
            runner = runner.next; 
        }
        return sum/this.length();
    }*/
    back(){
        if (this.isEmpty()){
            return 'The list is empty.';
        }
        let runner = this.head;
        let back = runner.value;
        while (runner){
            back = runner.value;
            runner = runner.next;
        }
        return back;
    }
    remove(element){
        let current = this.head; 
        let prev = null; 
    
        // iterate over the list 
        while (current) { 
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.value == element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.value; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    }
    addback(element){
        // creates a new node 
        const node = new Node(element); 
        // to store current node 
        let current; 
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
            // iterate to the end of the 
            // list 
            while (current.next) { 
                current = current.next; 
            } 
            // add node 
            current.next = node; 
        } 
        this.size++;
    }
    secondtolast(){
        if (this.length()<2){
            return 'There is no second to last node.';
        }
        let runner = this.head;
        let secondval = runner.value;
        while (runner.next){
            secondval = runner.value;
            runner = runner.next;
        }
        return secondval;
    }
    /*copy(){
        let newlist = new LinkedList();
        let runner = this.head;
        while (runner){
            newlist.addback(runner.value);
            runner = runner.next;
            newlist = newlist.next;
        }
        return newlist;
    }*/
    /*filter(min,max){
        let runner = this.head;
        let pre = runner;
        while (runner) {
            pre = runner;
            if (runner.value < min || runner > max){
                this.remove(runner.value);
                runner = pre;
            } else {
                runner = runner.next;
            }
            
        }
        return this;
    }*/
}
const list = new LinkedList();
console.log('The last value in the list = ',list.back());
console.log(list.contains(11));
list.addFront(11).addFront(9).addFront(5);
console.log(list);
console.log(list.contains(11));
console.log('length of list',list.length());
list.display();
//console.log('Max value from the list = ',list.max());
//console.log('Min value from the list = ',list.min());
//console.log('Average value of the list = ',list.avg());
console.log('The last value in the list = ',list.back());
const val=list.back();
console.log('remove last node value =',list.remove(val));
console.log('The list after removing the last node:')
list.display();
list.addback(15);
console.log('The list after adding a node at the end:')
list.display();
console.log('The second to last value in the list = ',list.secondtolast());
list.remove(9);
console.log('The list after removing a node:')
list.display();
//list.copy().display();     
//list.filter(6,17).display();          