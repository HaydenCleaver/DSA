'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString(){
    let newString = '';
    let current = this.head;
    while(current){
      newString = newString + `{${current.value.toString()}} ->`;
      current = current.next;
    }
    newString += 'NULL';
    return newString;
  }
}

let list = new LinkedList();

console.log('empty list', list);

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(7);
list.insert('hello');

console.log(list.toString());

console.log(list.includes(7));
console.log(list.includes('hello'));
console.log(list.includes(5));

module.exports = LinkedList;
