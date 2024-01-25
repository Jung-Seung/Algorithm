/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // 더미 노드를 생성하고 헤드를 연결
    const dummy = new ListNode(0);
    dummy.next = head;

    // left 위치 이전 노드 찾기
    let prevLeft = dummy;
    for (let i = 1; i < left; i++) {
        prevLeft = prevLeft.next;
    }

    // 역순 변환 시작 위치의 노드 찾기
    let current = prevLeft.next;
    
    // 역순 변환 진행
    for (let i = 0; i < right - left; i++) {
        const temp = current.next;
        current.next = temp.next;
        temp.next = prevLeft.next;
        prevLeft.next = temp;
    }

    return dummy.next;
};