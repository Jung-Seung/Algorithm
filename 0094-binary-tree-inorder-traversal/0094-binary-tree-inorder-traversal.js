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
// 이진 트리의 중위 순회 결과를 반환하는 함수
var inorderTraversal = function(root) {
    // 결과를 저장할 배열
    const result = [];
    // 중위 순회를 수행하는 재귀 함수
    const inorder = (node) => {
        // 현재 노드가 존재하면 순회 진행
        if (node) {
            // 왼쪽 서브트리 순회
            inorder(node.left);
            // 현재 노드의 값을 결과 배열에 추가
            result.push(node.val);
            // 오른쪽 서브트리 순회
            inorder(node.right);
        }
    };
    // 루트에서 시작하여 중위 순회 실행
    inorder(root);

    return result;
};