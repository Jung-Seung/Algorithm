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
const reverseKGroup = function(head, k) {
    // 입력이 없으면 null을 반환합니다.
    if (!head) return null;

    // 연결 리스트를 배열로 변환하여 순서를 뒤집습니다.
    let list = [];
    while (head !== null) {
        list.push(head.val);
        head = head.next;
    }

    // 연결 리스트가 비어있으면 null을 반환합니다.
    if (list.length === 0) return null;

    // k개의 노드로 이루어진 그룹을 순회하면서 노드의 순서를 뒤집습니다.
    for (let i = 0; i < list.length; i += k) {
        let temp = list.slice(i, i+k);
        if (temp.length < k) continue;
        for (let j = 0; j < k; j++) {
            list[i+j] = temp[k-j-1];
        }
    }

    // 뒤집힌 순서의 노드로부터 새로운 연결 리스트를 구성합니다.
    let result = new ListNode(list.pop());
    while (list.length > 0) {
        result = new ListNode(list.pop(), result);
    }

    // 새로운 연결 리스트의 헤드 노드를 반환합니다.
    return result;
};