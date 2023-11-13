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
var reverseKGroup = function(head, k) {
    // 가장 처음의 더미 노드 생성
    var dummy = new ListNode(0);
    dummy.next = head;
    var prevGroupTail = dummy;

    // head가 존재하는 동안 반복
    while (head) {
        // 현재 그룹의 시작점 할당
        var groupStart = head;
        // 현재 그룹의 끝점 계산
        var groupEnd = getGroupEnd(head, k);

        // 그룹의 끝이 존재하지 않을 경우 반복 종료
        if (!groupEnd)
            break;

        // 이전 그룹의 꼬리를 현재 그룹의 뒤집힌 리스트의 헤드로 설정
        prevGroupTail.next = reverseList(groupStart, groupEnd.next);
        prevGroupTail = groupStart;
        head = prevGroupTail.next;
    }
    // 더미 노드의 다음 노드를 새로운 헤드 노드로 설정
    var newHead = dummy.next;
    return newHead;
}

// 그룹의 끝점을 찾는 함수
var getGroupEnd = function(head, k) {
    while (head && k > 1) {
        head = head.next;
        k--;
    }
    return head;
}

// 노드를 뒤집는 함수
var reverseList = function(head, stop) {
    var prev = stop;
    while (head !== stop) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
