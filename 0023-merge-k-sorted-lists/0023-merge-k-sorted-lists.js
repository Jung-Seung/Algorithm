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
var mergeKLists = function(lists) {
  // 우선순위 큐 생성
  const queue = new MinPriorityQueue({ priority: x => x.val })

  // 리스트의 헤드를 우선순위 큐에 추가
  for (const head of lists) {
    if (head) {
      queue.enqueue(head)
    }
  }

  // 결과를 저장할 빈 노드 생성
  let result = new ListNode()
  const head = result

  // 큐가 비어있지 않은 동안 연산을 반복
  while (!queue.isEmpty()) {
    // 큐에서 우선순위가 가장 높은 노드 추출
    const { val, next } = queue.dequeue().element

    // 추출한 노드의 값을 결과 노드에 추가
    result.next = new ListNode(val)
    result = result.next

    // 추출한 노드의 다음 노드가 존재하면 큐에 추가
    if (next) {
      queue.enqueue(next)
    }
  }

  // 결과 노드의 다음 노드 반환
  return head.next
};
