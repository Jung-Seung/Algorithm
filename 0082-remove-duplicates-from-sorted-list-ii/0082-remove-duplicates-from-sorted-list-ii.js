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
    if (!head || !head.next) {
        return head; // 노드가 없거나 하나뿐인 경우, 중복된 노드가 없으므로 그대로 반환
    }

    const dummy = new ListNode(0); // 가상의 더미 노드 생성
    dummy.next = head; // 더미 노드의 다음을 현재 헤드로 설정
    let prev = dummy; // 이전 노드를 가리키는 포인터

    while (head) {
        let hasDuplicates = false; // 중복 여부를 나타내는 플래그
        // 중복된 노드인 경우
        while (head.next && head.val === head.next.val) {
            head = head.next;
            hasDuplicates = true;
        }
        
        // 중복이 없는 경우
        if (!hasDuplicates) {
            prev.next = head;
            prev = prev.next;
        }

        head = head.next;
    }

    prev.next = null; // 중복 제거 후 뒤에 남은 노드들을 제거

    return dummy.next; // 가상의 더미 노드의 다음이 새로운 헤드가 됨
};