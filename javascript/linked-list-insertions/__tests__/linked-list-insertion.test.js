'use strict';

const {Node, LinkedList} = require('../index.js');

describe('Linked List Class', () => {
  test('can append node to end of linked list', () =>{
    let list = new LinkedList();
    list.append(1);
    list.append(2);

    expect(list.head.next.value).toBe(2);
  });

  test('can append multiple nodes to end of linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head.next.next.value).toBe(3);
  });

  test('can successfully insert node before a node in middle of the list', () =>{
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.insertBefore(3, 5);
    expect(list.head.next.next.value).toBe(5);
  });

  test('can successfully insert node at start of list', () =>{
    let list = new LinkedList();
    list.append(1);
    list.append(2);

    list.insertBefore(1, 3);
    expect(list.head.value).toBe(3);
  });

  test('can succesfully insert node after a node in the middle of list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.insertAfter(2, 4);
    expect(list.head.next.next.value).toBe(4);
  });

  test('can succesfully insert node after the end of a list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);

    list.insertAfter(2, 3);
    expect(list.head.next.next.value).toBe(3);
  });
});
