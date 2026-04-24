// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    const stack = [];

    // Use the fast and slow pointer technique to find the middle of the linked list
    while (fast !== null && fast.next !== null) {
        stack.push(slow.val); // Push the value of the slow pointer onto the stack
        slow = slow.next; // Move the slow pointer one step
        fast = fast.next.next; // Move the fast pointer two steps
    }

    // If the linkeed list has an odd number of elements, skip the middle element
    if (fast !== null) {
        slow = slow.next;
    }

    // Compare the second half of the linked list with the values in the stack
    while (slow !== null) {
        const top = stack.pop(); // Get the top value from the stack
        if (top !== slow.val) {
            return false; // If the values do not match, the linked list is not a palindrome
        } else {
            slow = slow.next; // Move the slow pointer one step
        }
    }

    return true;
};