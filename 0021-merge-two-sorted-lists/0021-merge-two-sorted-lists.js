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
var mergeTwoLists = function(list1, list2) {
    // 만약 list1이 null이라면 list2를 반환합니다.
    if (!list1) return list2;
    // 만약 list2가 null이라면 list1을 반환합니다.
    if (!list2) return list1;
    
    // 만약 list1의 값이 list2의 값보다 작거나 같다면
    if (list1.val <= list2.val) {
        // list1의 다음 노드를 list1과 list2의 병합 결과로 갱신합니다.
        list1.next = mergeTwoLists(list1.next, list2);
        // list1을 반환합니다.
        return list1;
    } else {
        // 위의 경우가 아니라면
        // list2의 다음 노드를 list1과 list2의 병합 결과로 갱신합니다.
        list2.next = mergeTwoLists(list1, list2.next);
        // list2를 반환합니다.
        return list2;
    }
};