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
var swapPairs = function(head) {
    // 만약 head가 존재하지 않거나 head의 다음 노드가 존재하지 않으면 head 반환
    if (!head || !head.next) {
        return head;
    }
    
    // newHead 변수에 head의 다음 노드 할당
    var newHead = head.next;
    // 이전 노드를 나타내는 prev 변수와 현재 노드를 나타내는 curr 변수 초기화
    var prev = null;
    var curr = head;
    
    // curr가 존재하고 curr의 다음 노드가 존재하는 동안 반복
    while (curr && curr.next) {
        // 다음 노드를 나타내는 next 변수 할당
        var next = curr.next;
        // curr의 다음 노드를 next의 다음 노드로 설정
        curr.next = next.next;
        // next의 다음 노드를 curr로 설정하여 노드를 스왑
        next.next = curr;
        
        // prev가 존재하는 경우 prev의 다음 노드를 next로 설정하여 이전 노드와 스왑된 노드 연결
        if (prev) {
            prev.next = next;
        }
        
        // prev 변수에 curr, curr 변수에 curr의 다음 노드로 설정하여 다음 노드로 이동
        prev = curr;
        curr = curr.next;
    }
    
    // 스왑된 헤드 노드 반환
    return newHead;
};
