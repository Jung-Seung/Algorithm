/*
문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
*/

// 방법 1
function solution(answers) {
    const patterns = [
      [1, 2, 3, 4, 5],
      [2, 1, 2, 3, 2, 4, 2, 5],
      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    const scores = patterns.map(pattern =>
      answers.reduce((score, answer, idx) =>
        score + (answer === pattern[idx % pattern.length] ? 1 : 0),
        0)
    )
    const maxScore = Math.max(...scores)
    const answer = scores.reduce((acc, score, idx) =>
      score === maxScore ? [...acc, idx + 1] : acc,
      [])
    return answer
}
// 풀이
/*
수포자들의 찍기 패턴을 patterns 배열에 저장하고, map 함수를 사용하여 각 수포자의 점수를 계산합니다.
점수 계산은 reduce 함수를 사용하여 수포자가 해당 문제를 맞췄으면 1점을 추가하고, 아니면 0점을 추가하는 방식으로 이루어집니다.
그리고 가장 높은 점수를 찾기 위해 Math.max 함수를 사용하고, 이에 해당하는 수포자들의 번호를 구하기 위해 reduce 함수를 다시 사용합니다.
점수가 가장 높은 수포자들의 번호를 배열에 저장하여 반환합니다.
*/

/*
수포자들의 패턴과 답안 배열 초기화:
patterns 배열에 각 수포자들의 패턴을 저장합니다.
scores 배열에 수포자들이 정답을 맞춘 개수를 저장할 예정입니다.

정답 개수 계산:
patterns 배열을 순회하면서 각 수포자의 패턴과 주어진 정답 배열을 비교하여 정답을 맞춘 개수를 계산합니다.
reduce 함수를 사용하여 정답 배열 answers와 수포자의 패턴을 비교하고, 정답을 맞춘 경우 1을 더합니다. 그렇지 않은 경우 0을 더합니다.
이렇게 계산한 점수를 scores 배열에 저장합니다.

가장 많이 정답을 맞춘 점수 계산:
scores 배열에서 가장 큰 값을 Math.max(...scores)를 사용하여 구합니다.

가장 많이 정답을 맞춘 수포자들의 번호 반환:
reduce 함수를 사용하여 scores 배열을 순회하면서 가장 높은 점수를 맞춘 수포자들의 번호를 찾습니다.
가장 높은 점수를 맞춘 수포자들의 번호를 answer 배열에 저장합니다.

최종 결과 반환:
가장 많이 정답을 맞춘 수포자들의 번호인 answer 배열을 반환합니다.
*/

// 방법 2
function solution(answers) {
    var answer = []
    var a1 = [1, 2, 3, 4, 5]
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)}
    if (a2c === max) {answer.push(2)}
    if (a3c === max) {answer.push(3)}


    return answer
}

/*
수포자들의 패턴과 답안 배열 초기화:
a1, a2, a3 배열에 각 수포자들의 패턴을 저장합니다.
a1c, a2c, a3c 변수에 각 수포자들이 정답을 맞춘 개수를 저장할 예정입니다.

정답 개수 계산:
filter 메서드를 사용하여 각 수포자의 패턴과 주어진 정답 배열을 비교하여 정답을 맞춘 개수를 계산합니다.
filter 메서드는 주어진 조건에 맞는 요소들만 새로운 배열로 반환합니다. 여기서는 정답을 맞춘 경우만 필터링하여 해당 배열의 길이를 계산하면 정답을 맞춘 개수가 됩니다.

가장 많이 정답을 맞춘 점수 계산:
Math.max 함수를 사용하여 a1c, a2c, a3c 중 가장 큰 값을 구합니다.

가장 많이 정답을 맞춘 수포자들의 번호 반환:
max 값과 a1c, a2c, a3c를 비교하여 가장 많이 정답을 맞춘 수포자들의 번호를 answer 배열에 저장합니다.

최종 결과 반환:
가장 많이 정답을 맞춘 수포자들의 번호인 answer 배열을 반환합니다.
*/