/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // 파티션의 앞과 뒤를 나타내는 더미 노드 생성
    let frontDummy = new ListNode(0);
    let backDummy = new ListNode(0);

    // 앞과 뒤를 가리키는 포인터 생성
    let front = frontDummy;
    let back = backDummy;

    // 주어진 연결 리스트를 순회하면서 파티션 진행
    let current = head;
    while (current) {
        if (current.val < x) {
            // 현재 노드가 기준값보다 작으면 파티션 앞에 추가
            front.next = current;
            front = current;
        } else {
            // 현재 노드가 기준값보다 크거나 같으면 파티션 뒤에 추가
            back.next = current;
            back = current;
        }
        // 다음 노드로 이동
        current = current.next;
    }

    // 파티션의 뒤 노드의 다음을 null로 설정하여 파티션 완료
    back.next = null;

    // 앞 파티션의 끝을 뒷 파티션의 처음에 연결
    front.next = backDummy.next;

    // 최종 파티션이 완료된 연결 리스트의 헤드 노드 반환
    return frontDummy.next;
};