'use strict';

// Require our linked list implementation
const {Node, LinkedList} = require('../index');

describe('Node Class', () => {
  it('can create node with value', () => {
    let newNode = new Node(1);
    expect(newNode.value).toBe(1);
  });
});

describe('Linked List Class', () => {

  it('can create an empty linked list', () =>{

    let list = new LinkedList();

    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
    expect(list.head).toBeFalsy();
  });

  it('can add node to head with insert method', () => {
    let list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
  });

  it('can add multiple nodes to the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });

  it('will return true when finding a value within the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);

    expect(list.includes(1)).toBeTruthy();
  });

  it('will return falsey when search for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);

    expect(list.includes(3)).toBeFalsy();
  });

  it('can create string out of current node values with toString method', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert('hello');

    expect(list.toString()).toBe('{hello} -> {2} -> {1} -> NULL');
  });
});
