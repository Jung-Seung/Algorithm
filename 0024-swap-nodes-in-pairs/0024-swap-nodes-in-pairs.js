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
const swapPairs = function(head) {
    // 입력이 없거나 노드가 하나뿐인 경우, 입력을 그대로 반환합니다.
    if (!head || !head.next) {
        return head;
    }
    
    // 새로운 헤드 노드를 현재 노드의 다음 노드로 지정합니다.
    const newHead = head.next;
    
    // 이전 노드, 현재 노드를 초기화합니다.
    let prev = null;
    let curr = head;
    
    // 현재 노드와 그 다음 노드가 존재하는 동안 반복합니다.
    while (curr && curr.next) {
        // 다음 노드를 참조합니다.
        const next = curr.next;
        
        // 현재 노드와 다음 노드의 연결을 교환합니다.
        curr.next = next.next;
        next.next = curr;
        
        // 이전 노드가 존재한다면, 이전 노드의 다음 노드를 다음 노드로 지정합니다.
        if (prev) {
            prev.next = next;
        }
        
        // 이전 노드를 현재 노드로 갱신하고, 현재 노드는 그 다음 노드로 이동합니다.
        prev = curr;
        curr = curr.next;
    }
    
    // 쌍으로 교환된 연결 리스트의 새로운 헤드 노드를 반환합니다.
    return newHead;
};