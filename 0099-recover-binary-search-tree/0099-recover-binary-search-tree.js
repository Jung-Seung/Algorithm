/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    // 잘못된 값이 저장될 변수 선언
    let small = null, big = null;
    // 이전 노드를 저장할 변수 선언
    let prev = null;
    // 중위 순회 함수 정의
    let inorder = function(r) {
        // 기저 사례: 현재 노드가 null인 경우 종료
        if (r == null) return;
        // 왼쪽 서브트리 탐색
        inorder(r.left);
        // 현재 노드와 이전 노드 비교하여 순서가 잘못된 경우 처리
        if (prev && prev.val > r.val) {
            small = r; // 작은 값을 찾음
            if(big) return; // 이미 큰 값을 찾은 경우 종료
            big = prev; // 큰 값을 찾음
        }
        // 현재 노드를 이전 노드로 설정
        prev = r;
        // 오른쪽 서브트리 탐색
        inorder(r.right);
    }
    // 중위 순회 시작
    inorder(root);
    // 작은 값과 큰 값을 서로 교환
    [small.val, big.val] = [big.val, small.val];
};