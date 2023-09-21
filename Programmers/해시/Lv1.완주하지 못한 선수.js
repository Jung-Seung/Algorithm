/*
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.
*/

// 방법 1
const solution = (participant, completion) => {
    // 각 배열 정렬
    participant = participant.sort()
    completion = completion.sort()

    // 문제 설명중 participant 는 completion 보다 길이가 1길다고 함.
    // 각 배열을 정렬해서 서로 비교하다가 아니면 participant[a] 반환
    for(let a = 0; a < participant.length; a++){
      if(participant[a] !== completion[a]){
        return participant[a]
      }
    }
}

/*
참가자와 완주자 목록 정렬:
participant와 completion 배열을 각각 알파벳 순서로 정렬합니다.
정렬을 통해 두 배열을 비교할 때 더 쉽게 처리할 수 있습니다.

비교를 통한 완주하지 못한 참가자 찾기:
participant 배열을 순회하면서 각 참가자를 검사합니다.
현재 순회 중인 참가자와 동일한 인덱스의 completion 요소를 비교합니다.
만약 두 값이 다르다면, 해당 참가자는 완주하지 못한 것으로 판단하고 반환합니다.
*/

// 방법 2
const solution2 = (participant, completion) => {
  // 효율성에서 떨어짐
  // 완주한 선수의 이름이 담긴 배열(completion)로
	// 참여한 선수의 이름이 담긴 배열(participant)을 하나씩 줄여나가서 반환
  completion.map((v) => participant.splice(participant.indexOf(v),1))
  return participant[0]
}