/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 두 정렬된 연결 리스트를 병합하는 함수입니다.
var mergeTwoLists = function(l1, l2) {
    // l1이 존재하지 않는 경우, l2를 반환합니다.
    if (!l1) {
        return l2;
    }
    // l2가 존재하지 않는 경우, l1을 반환합니다.
    if (!l2) {
        return l1;
    }
    // l1의 값이 l2의 값보다 작은 경우
    if (l1.val < l2.val) {
        // l1의 다음 노드와 l2를 병합하여 반환합니다.
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        // l2의 다음 노드와 l1을 병합하여 반환합니다.
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// 여러 정렬된 연결 리스트를 병합하는 함수입니다.
var mergeKLists = function(lists) {
    // 결과 리스트를 초기화합니다.
    let ans = null;
    // 각 리스트를 하나씩 병합합니다.
    for (let i = 0; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i]);
    }
    // 병합된 결과를 반환합니다.
    return ans;
};