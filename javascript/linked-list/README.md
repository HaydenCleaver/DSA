# Singly Linked List

- Create a linked-list with built in methods

## Challenge

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

- Create a Linked List class with the 'head' property and the following methods:
  - insert
  - includes
  - to string

## Approach & Efficiency

- used simple traversals to implement `includes` and `toString` methods.

- Big O for `insert`:
  - Time: O(1)
  - Space: O(1);

- Big O for `includes` and `toString`:
  - Time: O(n)
  - Space: O(n)

## API

- insert:
  - Arguments: value
  - Returns: nothing
  - Adds a new node with that value to the head of the list with an O(1) Time performance.

- includes:
  - Arguments: value
  - Returns: Boolean
  - Indicates whether that value exists as a Node’s value somewhere within the list.

- toString:
  - Arguments: none
  - Returns: a string representing all the values in the Linked List, formatted as: `"{ a } -> { b } -> { c } -> NULL"`
