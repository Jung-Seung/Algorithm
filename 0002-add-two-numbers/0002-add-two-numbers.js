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
var addTwoNumbers = function(l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        // 두 연결 리스트가 끝에 도달하고, 올림 값이 없는 경우 null을 반환합니다.
        if (!n1 && !n2 && !rest) return null;
        // 현재 자리의 숫자를 계산합니다.
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        // 다음 자리의 노드를 재귀적으로 계산합니다.
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        // 현재 노드를 생성하고 반환합니다.
        return new ListNode(newVal % 10, nextNode);
    }
    // 초기 호출로 결과를 반환합니다.
    return iter(l1, l2);
};
