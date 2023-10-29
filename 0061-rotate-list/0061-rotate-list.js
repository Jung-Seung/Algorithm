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
var rotateRight = function(head, k) {
    // 예외 처리: 헤드가 없거나 회전할 횟수가 0인 경우
    if (!head || k === 0) return head;

    // 연결 리스트의 길이 계산
    let length = 1;
    let current = head;
    while (current.next) {
        current = current.next;
        length++;
    }

    // 연결 리스트를 순환 리스트로 만듦
    current.next = head;

    // k 값이 length보다 큰 경우를 대비하여 나머지 연산
    k = k % length;

    // 오른쪽으로 회전하는 동안 현재 노드를 이동시킴
    for (let i = 0; i < length - k; i++) {
        current = current.next;
    }

    // 새로운 헤드 노드 설정 및 기존의 연결 리스트 끊어줌
    let newHead = current.next;
    current.next = null;

    return newHead;
};