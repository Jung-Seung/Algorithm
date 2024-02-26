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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 이진 탐색 트리의 유효성을 검사하는 helper 함수
    function isValid(node, lower, upper) {
        // 노드가 null인 경우 유효한 이진 탐색 트리의 일부로 간주되지 않음
        if (!node) return true;
        
        // 현재 노드의 값이 하한 값보다 작거나 상한 값보다 크면 유효하지 않음
        if (node.val <= lower || node.val >= upper) return false;
        
        // 왼쪽 서브트리와 오른쪽 서브트리의 유효성을 재귀적으로 확인
        return isValid(node.left, lower, node.val) && isValid(node.right, node.val, upper);
    }
    
    // helper 함수 호출하여 루트 노드부터 유효성 검사 시작
    return isValid(root, -Infinity, Infinity);
};