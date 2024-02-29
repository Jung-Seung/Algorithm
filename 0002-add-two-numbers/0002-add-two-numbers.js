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
    // 결과를 담을 새로운 링크드 리스트 생성
    const node = new ListNode();
    // 결과 링크드 리스트의 임시 노드 설정
    let tmpNode = node;
    // 올림 값 초기화
    let carry = 0;
    // 두 리스트 중 하나라도 남아있거나 올림 값이 있는 동안 반복
    while (l1 || l2 || carry) {
        // 새 노드 생성 후 연결
        tmpNode.next = new ListNode();
        tmpNode = tmpNode.next;
        // 현재 노드의 값 계산
        const left = l1 ? l1.val : 0;
        const right = l2 ? l2.val : 0;
        let sum = left + right + carry;
        const value = sum < 10 ? sum : sum % 10; // 합이 10 미만인 경우 value는 sum, 그렇지 않으면 sum을 10으로 나눈 나머지
        carry = sum < 10 ? 0 : 1; // 합이 10 미만이면 올림 값은 0, 그렇지 않으면 1
        tmpNode.val = value; // 현재 노드에 값 설정
        
        // 다음 노드로 이동
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    // 결과 링크드 리스트 반환
    return node.next;
};