/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

*/


// My Solution:

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var tempSum = 0, carryOver = 0, sumToUse = 0;
    
    if(l1 === null || l2 === null) { return l1 || l2 }
    
    var results = new ListNode(0);
    var current = results;
    
    while(l1 || l2){
        var l1Val, l2Val;
        
        if(l1){
            l1Val = l1.val;
            l1 = l1.next
        } else {
            l1Val = 0;
        }
        
        if(l2){
            l2Val = l2.val;
            l2 = l2.next
        } else {
            l2Val = 0;
        }
        
        tempSum = carryOver + l1Val + l2Val;
        
        if(tempSum / 10 >= 1){
            sumToUse = tempSum % 10;
            carryOver = 1;
        } else {
            sumToUse = tempSum;
            carryOver = 0;
        }
        
        current.next = new ListNode(sumToUse);
        current = current.next;
    }
    
    if(carryOver !== 0){
        current.next = new ListNode(1)
    }
    
    return results.next;
};