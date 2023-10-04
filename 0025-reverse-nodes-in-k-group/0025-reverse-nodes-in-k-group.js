/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let list = new Array();
    
    while (head !== null) {
        list.push(head.val);
        head = head.next;
    }

    if (list.length === 0) return null;

    for (let i = 0; i < list.length; i += k) {
        let temp = list.slice(i, i+k);
        if (temp.length < k) continue;
        for (let j = 0; j < k; j++) {
            list[i+j] = temp[k-j-1];
        }
    }

    let result = new ListNode(list.pop());
    while (list.length > 0) {
        result = new ListNode(list.pop(), result);
    }

    return result;
};