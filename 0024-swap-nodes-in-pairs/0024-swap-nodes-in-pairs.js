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
const swapPairs = function(head) {
    // 입력이 없거나 노드가 하나뿐이면 입력을 그대로 반환합니다.
    if (head == null) return head;
    if (head.next == null) return head;

    // 현재 노드와 다음 노드를 교환합니다.
    let temp = head.next;
    head.next = temp.next;
    temp.next = head;

    // 재귀적으로 다음 노드부터 쌍을 교환합니다.
    head.next = swapPairs(head.next);

    // 쌍이 교환된 연결 리스트의 새로운 헤드를 반환합니다.
    return temp;
};