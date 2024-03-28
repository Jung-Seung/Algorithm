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
// 주어진 연결 리스트를 k개의 노드를 갖는 그룹으로 나눈 뒤, 각 그룹 내의 노드 순서를 뒤집는 함수입니다.
const reverseKGroup = function(head, k) {
    // 더미 노드를 생성하고, 이전 그룹의 꼬리를 가리키도록 설정합니다.
    var dummy = new ListNode(0);
    dummy.next = head;
    var prevGroupTail = dummy;

    // 연결 리스트를 그룹으로 나누고 각 그룹을 순회합니다.
    while (head) {
        // 그룹의 시작 노드와 끝 노드를 찾습니다.
        var groupStart = head;
        var groupEnd = getGroupEnd(head, k);

        // 만약 그룹의 끝이 없다면, 그룹 나누기를 중단합니다.
        if (!groupEnd)
            break;

        // 그룹 내의 노드 순서를 뒤집고, 그룹의 시작 부분을 연결합니다.
        prevGroupTail.next = reverseList(groupStart, groupEnd.next);
        // 이전 그룹의 꼬리를 현재 그룹의 시작 부분으로 갱신합니다.
        prevGroupTail = groupStart;
        // 다음 그룹의 시작 노드를 설정합니다.
        head = prevGroupTail.next;
    }

    // 더미 노드 다음의 연결 리스트가 뒤집힌 순서를 갖는 새로운 헤드 노드입니다.
    var newHead = dummy.next;
    return newHead;
}

// 주어진 노드부터 k개의 노드를 순회하여 그룹의 끝 노드를 반환하는 함수입니다.
var getGroupEnd = function(head, k) {
    while (head && k > 1) {
        head = head.next;
        k--;
    }
    return head;
}

// 주어진 노드부터 stop 노드까지의 연결 리스트를 뒤집는 함수입니다.
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