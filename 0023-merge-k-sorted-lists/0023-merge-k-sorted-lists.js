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
const mergeKLists = function(lists) {
    // 우선순위 큐를 생성합니다. 우선순위는 노드의 값으로 설정합니다.
    const queue = new MinPriorityQueue({ priority: x => x.val });

    // 주어진 연결 리스트들의 헤드를 우선순위 큐에 추가합니다.
    for (const head of lists) {
        if (head) {
            queue.enqueue(head);
        }
    }

    // 결과 리스트의 헤드를 초기화합니다.
    let result = new ListNode();
    const head = result;

    // 우선순위 큐가 비어있지 않은 동안 반복합니다.
    while (!queue.isEmpty()) {
        // 우선순위 큐에서 우선순위가 가장 높은 노드를 추출합니다.
        const { val, next } = queue.dequeue().element;

        // 결과 리스트에 새로운 노드를 추가합니다.
        result.next = new ListNode(val);
        result = result.next;

        // 추출한 노드의 다음 노드를 우선순위 큐에 추가합니다.
        if (next) {
            queue.enqueue(next);
        }
    }

    // 병합된 연결 리스트의 헤드를 반환합니다.
    return head.next;
}