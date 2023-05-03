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

  kthfromEnd(k){
    let current = this.head;
    let kBehind = this.head;

    if (k < 0){
      return 'Invalid Input';
    }

    for (let i = 0; i < k; i++){
      current = current.next;
      if(current === null){
        return 'Error';
      }
    }

    while(current.next){
      current = current.next;
      kBehind = kBehind.next;
    }

    console.log(kBehind.value);
    return kBehind.value;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(9);

list.kthfromEnd(1);

module.exports = LinkedList;
