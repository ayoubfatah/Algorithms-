//
//
class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

const myLinkedList = new LinkList(1);

myLinkedList.push(2);
myLinkedList.push(22);
myLinkedList.push(12);

console.log(myLinkedList);
