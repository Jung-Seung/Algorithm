/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    var newHead = head.next;
    var prev = null;
    var curr = head;
    
    while (curr && curr.next) {
        var next = curr.next;
        curr.next = next.next;
        next.next = curr;
        
        if (prev) {
            prev.next = next;
        }
        
        prev = curr;
        curr = curr.next;
    }
    
    return newHead;
};