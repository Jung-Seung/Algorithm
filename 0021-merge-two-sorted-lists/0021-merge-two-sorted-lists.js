/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 만약 l1이 존재하지 않는다면 l2를 반환합니다.
    if (!l1) return l2;
    // 만약 l2가 존재하지 않는다면 l1을 반환합니다.
    if (!l2) return l1;
    // l1의 값이 l2의 값보다 작다면 l1을 선택하여 재귀적으로 함수를 호출하고 l1을 반환합니다.
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    // l1의 값이 l2의 값보다 크거나 같다면 l2를 선택하여 재귀적으로 함수를 호출하고 l2를 반환합니다.
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
