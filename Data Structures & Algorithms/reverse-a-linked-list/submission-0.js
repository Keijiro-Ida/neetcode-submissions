/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        const stack = [];
        let cur = head;

        while(cur != null) {
            stack.push(cur.val);
            cur = cur.next;
        }

        const dummy = new ListNode(0);
        cur = dummy;
        while(stack.length > 0) {
            cur.next = new ListNode(stack.pop());
            cur = cur.next;
        }
        return dummy.next;
    }
}
