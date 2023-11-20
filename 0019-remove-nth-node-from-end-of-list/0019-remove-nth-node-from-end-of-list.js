/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // fast와 slow라는 두 포인터를 머리에 초기화합니다.
    let fast = head, slow = head;
    // fast 포인터를 n+1번째 위치로 이동합니다.
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    // 만약 fast가 null이라면, 제거할 노드가 머리 자체입니다.
    if (!fast) {
        return head.next;
    }
    // fast가 끝에 도달할 때까지 양 포인터를 함께 이동시킵니다.
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    // 끝에서 n번째 노드를 제거하고, 그 전 노드의 next 포인터를 조정합니다.
    slow.next = slow.next.next;
    // 수정된 연결 리스트의 머리를 반환합니다.
    return head;
};
