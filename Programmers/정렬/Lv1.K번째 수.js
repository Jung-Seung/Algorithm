/*
문제 설명
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
- array의 길이는 1 이상 100 이하입니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.
*/

function solution(array, commands) {
    const answer = [];
    for (let i = 0; i < commands.length; i++) {
        const [start, end, k] = commands[i];
        const sliced = array.slice(start - 1, end);
        const sorted = sliced.sort((a, b) => a - b);
        answer.push(sorted[k - 1]);
    }
    return answer;
}

// 풀이
/*
주어진 배열 commands를 for문으로 반복하면서 각각의 원소를 [start, end, k] 변수로 분할합니다.
그 다음, array 배열에서 slice() 메서드를 사용하여 start - 1 인덱스부터 end 인덱스까지의 부분 배열 sliced를 추출하고,
sort() 메서드를 사용하여 정렬한 후 k - 1 인덱스에 해당하는 값을 answer 배열에 push() 합니다.
마지막으로, answer 배열을 반환합니다.
*/

/*
결과 배열 초기화:
answer 배열을 빈 배열로 초기화합니다. 이 배열은 작업을 수행한 결과를 담습니다.

작업(commands) 수행:
commands 배열을 순회하면서 각 작업을 수행합니다.
현재 작업을 나타내는 [start, end, k] 배열을 해체하여 start, end, k 변수에 할당합니다.
array 배열에서 start부터 end까지의 부분 배열을 추출하여 sliced에 저장합니다.
sliced 배열을 오름차순으로 정렬하여 sorted에 저장합니다.
sorted 배열에서 k번째 요소를 선택하여 answer 배열에 추가합니다.

결과 반환:
작업을 수행한 결과를 담고 있는 answer 배열을 반환합니다.
*/