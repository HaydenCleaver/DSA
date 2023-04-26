'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  append(value){
    const node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next){
      current = current.next;
    }

    current.next = node;
  }

  insertBefore(value, newValue){
    let newNode = new Node(newValue);
    let current = this.head;

    if(this.head.value === value){
      newNode.next = this.head;
      this.head = newNode;
    } else {
      while(current.next){
        if (current.next.value === value){
          newNode.next = current.next;
          current.next = newNode;
          return;
        }
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue){
    let newNode = new Node(newValue);
    let current = this.head;

    while(current){
      if (current.value === value){
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  traverse(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }
}

let list = new LinkedList();
console.log('empty list', list);

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log('list head', list);

list.insertBefore(4, 2);
list.insertAfter(5, 6);

list.traverse();

list.insertBefore(1, 9);
console.log(list);
list.traverse();

// function logger(value){
//   console.log(`Node Value: ${value}`);
// }

module.exports = {Node, LinkedList};
