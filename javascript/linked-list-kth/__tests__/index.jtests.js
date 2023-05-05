'use strict';
const supertest = require('supertest');

const LinkedList = require('../index');

describe ('Linked List Tests', () => {

  let list = new LinkedList;
  list.append(1);

  test ('Where the linked list length is 1', () => {
    expect(list.kthfromEnd(0));
  });

  list.append(4);

  test('Where k is greater than the length of the linked list', () => {
    expect(list.kthfromEnd(5)).toEqual('Error!');
  });

  test('Where k is the same length as the list', () => {
    expect(list.kthfromEnd(1)).toEqual(1);
  });
  test('Where k is not a positive integer', () => {
    expect(list.kthfromEnd(-2)).toEqual('Invalid Input');
  });
});
