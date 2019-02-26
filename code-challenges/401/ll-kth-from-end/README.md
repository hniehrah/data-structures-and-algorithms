# Code Challenge 07
### Linked List Kth Value

## Challenge
* Find kth value from the **end** of a linked list.

## Approach
* Iterated once through linked list to determine its length using a counter variable.
* Iterated once more through the linked list (counter - k) times.
* Returned the current value.

## Solution
![Whiteboard](whiteboard.jpg);

## Tests
* Can successfully find the kth value of a linked list.
* Returns 'Exception' if k = a negative integer.
* Returns 'Exception' if k is not a number.
* Returns 'Exception' if k > length of linked list.

## Big O
* Time - O(2n)
* Space - O(1)
