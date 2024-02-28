/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 두 트리가 모두 null이면 동일하다고 간주
    if (!p && !q) return true;
    // 둘 중 하나만 null이면 동일하지 않다고 판단
    if (!p || !q) return false;
    // 현재 노드의 값이 서로 다르면 동일하지 않다고 판단
    if (p.val !== q.val) return false;
    // 왼쪽 서브트리와 오른쪽 서브트리를 재귀적으로 비교하여 결과 반환
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};