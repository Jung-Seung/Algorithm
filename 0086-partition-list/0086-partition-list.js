/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // 작은 값들을 저장할 연결 리스트와 크거나 같은 값들을 저장할 연결 리스트를 생성
    let beforeHead = new ListNode(0);
    let before = beforeHead;
    let afterHead = new ListNode(0);
    let after = afterHead;

    // 주어진 연결 리스트를 탐색하여 작은 값과 크거나 같은 값으로 분리
    while (head !== null) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }

    // 두 파티션을 연결
    after.next = null; // 크거나 같은 값들 파티션의 끝을 설정
    before.next = afterHead.next; // 작은 값들 파티션의 끝을 크거나 같은 값들 파티션의 처음과 연결

    return beforeHead.next; // 최종적인 파티션이 완료된 연결 리스트의 헤드 노드 반환
};