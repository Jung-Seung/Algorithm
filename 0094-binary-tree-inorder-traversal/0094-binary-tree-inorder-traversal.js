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
 * @return {number[]}
 */
// 주어진 이진 트리의 중위 순회 결과를 반환하는 함수
var inorderTraversal = function(root) {
    // 결과를 저장할 배열
    const result = [];
    // 중위 순회를 수행하는 도우미 함수 호출
    helper(root, result);
    // 최종 중위 순회 결과 반환
    return result;
};

// 이진 트리의 중위 순회를 수행하는 재귀적 도우미 함수
function helper(root, result) {
    // 현재 노드가 존재하면 중위 순회를 수행
    if (root !== null) {
        // 왼쪽 서브트리 순회
        helper(root.left, result);
        // 현재 노드의 값을 결과 배열에 추가
        result.push(root.val);
        // 오른쪽 서브트리 순회
        helper(root.right, result);
    }
};