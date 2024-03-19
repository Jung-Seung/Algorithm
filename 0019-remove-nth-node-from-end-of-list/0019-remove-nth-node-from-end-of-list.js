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
    // 더미 헤드 노드를 생성하여 연결 리스트의 시작을 나타냅니다.
    const root = new ListNode(0);
    root.next = head;
    
    // 두 개의 포인터를 설정합니다.
    let front = root; // n번째 노드의 다음 노드를 가리킵니다.
    let back = root; // n번째 노드를 가리킵니다.
    
    // front 포인터를 n번째 노드까지 이동시킵니다.
    while (n >= 0) {
        front = front.next;
        n--;
    }
    
    // front 포인터를 연결 리스트의 끝까지 이동시키고,
    // back 포인터를 끝에서부터 n번째 노드의 이전 노드까지 이동시킵니다.
    while (front) {
        front = front.next;
        back = back.next;
    }

    // back 노드의 다음 노드를 건너뛰어 해당 노드를 제거합니다.
    back.next = back.next.next;
    
    // 더미 헤드 노드를 제외한 연결 리스트를 반환합니다.
    return root.next;
};