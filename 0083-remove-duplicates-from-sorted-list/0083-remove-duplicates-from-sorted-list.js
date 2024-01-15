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
var deleteDuplicates = function(head) {
    // 특수 케이스: 노드가 없거나 하나만 있는 경우
    if (!head || !head.next) {
        return head;
    }

    // 현재 노드에서 시작하여 중복된 노드 제거
    let current = head;

    while (current.next) {
        // 현재 노드의 값과 다음 노드의 값이 같으면 중복이므로 다음 노드를 건너뜀
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            // 값이 다르면 다음 노드로 이동
            current = current.next;
        }
    }

    return head;
};