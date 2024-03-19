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
    // 빠른 포인터와 느린 포인터를 초기화합니다.
    let fast = head, slow = head;
    
    // 빠른 포인터를 n만큼 이동시킵니다.
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    // 만약 빠른 포인터가 null이라면, 헤드 노드를 반환합니다.
    if (!fast) {
        return head.next;
    }
    
    // 빠른 포인터가 연결 리스트의 끝에 도달할 때까지 이동하면서,
    // 느린 포인터도 함께 이동합니다.
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // 느린 포인터의 다음 노드를 건너뛰어 해당 노드를 제거합니다.
    slow.next = slow.next.next;
    
    // 수정된 연결 리스트의 헤드 노드를 반환합니다.
    return head;
};