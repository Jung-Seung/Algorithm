/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 순열을 생성하는 함수
var permute = function(letters) {
    let res = [];
    dfs(letters, [], Array(letters.length).fill(false), res);
    return res;
}

// 깊이 우선 탐색을 통해 순열을 생성하는 보조 함수
function dfs(letters, path, used, res) {
    // 순열이 완성되면 결과 배열에 추가
    if (path.length === letters.length) {
        // 같은 리스트를 반복해서 추가하지 않도록 깊은 복사 수행
        res.push(Array.from(path));
        return;
    }

    // 문자 배열을 순회하며 순열 생성
    for (let i = 0; i < letters.length; i++) {
        // 이미 사용된 문자는 건너뛰기
        if (used[i]) continue;

        // 문자를 순열에 추가하고 사용 여부 표시
        path.push(letters[i]);
        used[i] = true;

        // 다음 단계의 순열 생성을 위해 재귀 호출
        dfs(letters, path, used, res);

        // 현재 문자를 순열에서 제거하고 사용 여부 업데이트
        path.pop();
        used[i] = false;
    }
}
