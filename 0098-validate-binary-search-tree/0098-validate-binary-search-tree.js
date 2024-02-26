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
    var validate = function(node, lower, upper) {
        // 노드가 null인 경우 유효한 이진 탐색 트리의 일부로 간주되지 않음
        if (node == null) {
            return true;
        }
        
        // 현재 노드의 값이 하한 값보다 크고 상한 값보다 작으면 유효한 이진 탐색 트리의 일부로 간주됨
        if (lower < node.val && node.val < upper) {
            // 왼쪽 서브트리와 오른쪽 서브트리의 유효성을 재귀적으로 확인
            return validate(node.left, lower, node.val) && validate(node.right, node.val, upper);
        } else {
            // 범위를 벗어나는 경우 유효한 이진 탐색 트리의 일부로 간주되지 않음
            return false;
        }
    };
    
    // helper 함수 호출하여 루트 노드부터 유효성 검사 시작
    return validate(root, -Infinity, Infinity);
};