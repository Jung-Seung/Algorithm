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
/* 
알고리즘 설명:
1. count 변수를 사용하여 목록의 총 노드 수를 계산합니다.
2. 이제 수행해야 하는 총 회전 횟수는 k = k % count로 제한될 수 있습니다.
3. 이제 ptr을 k 위치만큼 head에서 이동시킵니다. 이것은 다음에 나오는 흥미로운 로직에 필요합니다.
4. 이제 ptr이 k 단계 앞에 있기 때문에 k번째 위치를 나타냅니다. 
   즉, ptr.next !== null인 동안 반복하고 prev 포인터를 이동합니다. 
   한 번 ptr.next === null이면, 즉 ptr이 마지막 노드에 도달하면 prev 포인터는 정확히 끝에서 k번째 위치에 있을 것입니다.
5. 이제 prev 노드 다음에서 목록을 나눕니다. 마지막 노드인 ptr은 이제 head를 가리킵니다. 
   즉, ptr.next = head가 되고, prev의 다음 노드는 새로운 헤드가되며, 
   마지막으로 prev는 마지막 노드가되어 prev.next = null이 됩니다.
*/

var rotateRight = function (head, k) {
    // 예외 처리: 빈 연결 리스트인 경우
    if (!head) return head;

    let count = 0,
        ptr = head;

    // Step 1: 연결 리스트의 노드 개수를 센다
    while (ptr) {
        count++;
        ptr = ptr.next;
    }

    // Step 2: 회전 횟수를 노드 개수로 나눈 나머지로 조정
    k = k % count;
    let prev = head;
    ptr = head;

    // Step 3: 포인터를 k만큼 우측으로 이동
    while (k--) {
        ptr = ptr.next;
    }

    // Step 4: 실제로 우측으로 회전하는 부분
    while (ptr.next) {
        prev = prev.next;
        ptr = ptr.next;
    }

    // Step 5: 헤드와 마지막 노드를 수정하여 회전 적용
    ptr.next = head;
    head = prev.next;
    prev.next = null;
    return head;
};
