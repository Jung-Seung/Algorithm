/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const node = new ListNode();
  let tmpNode = node;
  let carry = 0;
  while (l1 || l2 || carry) {
    tmpNode.next = new ListNode();
    tmpNode = tmpNode.next;
    const left = l1 ? l1.val : 0;
    const right = l2 ? l2.val : 0;
    let sum = left + right + carry;
    const value = sum < 10 ? sum : sum % 10;
    carry = sum < 10 ? 0 : 1;
    tmpNode.val = value;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return node.next;
};