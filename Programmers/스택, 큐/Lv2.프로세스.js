/*
문제 설명
운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.

1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
  3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.

현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.

제한사항

priorities의 길이는 1 이상 100 이하입니다.
priorities의 원소는 1 이상 9 이하의 정수입니다.
priorities의 원소는 우선순위를 나타내며 숫자가 클 수록 우선순위가 높습니다.
location은 0 이상 (대기 큐에 있는 프로세스 수 - 1) 이하의 값을 가집니다.
priorities의 가장 앞에 있으면 0, 두 번째에 있으면 1 … 과 같이 표현합니다.
입출력 예

priorities	        location	return
[2, 1, 3, 2]	    2	        1
[1, 1, 9, 1, 1, 1]	0	        5

입출력 예 설명
예제 #1
문제에 나온 예와 같습니다.

예제 #2
6개의 프로세스 [A, B, C, D, E, F]가 대기 큐에 있고 중요도가 [1, 1, 9, 1, 1, 1] 이므로 [C, D, E, F, A, B] 순으로 실행됩니다. 따라서 A는 5번째로 실행됩니다.
*/

function solution(priorities, location) {
  var answer = 0;
  // process와 idx 값 저장
  const arr = priorities.map((process,idx) => {
    return {process, idx};
  })
  
  while(arr.length){
    // arr 배열에서 첫 번째 요소를 제거하고 그 값을 반환한 queue 생성
    const queue = arr.shift();
    // some 메서드를 사용해 queue.process 값보다 큰게 있는지 없는지 확인 있다면 push
    if(arr.some((element) => element.process > queue.process)){
      arr.push(queue);
    } else {
      // 없다면 answer += 1 idx 값이 location 과 같아지면 break
      answer += 1;
      if(queue.idx === location) break;
    }
  }
  return answer;
}

/*
초기 설정:
출력 순서를 나타내는 변수 answer를 0으로 초기화합니다.
작업 우선순위와 해당 작업의 인덱스를 함께 저장하는 객체의 배열 arr을 생성합니다. 각 작업의 객체는 process와 idx 속성을 가지고 있습니다.

작업 우선순위 확인:
arr 배열이 비어있을 때까지 반복합니다.
배열의 첫 번째 요소를 제거하여 queue에 할당합니다. 이는 현재 출력할 작업을 나타냅니다.
arr 배열의 다른 요소들과 비교하여 작업 우선순위가 더 높은 작업이 있는지 확인합니다.
만약 우선순위가 더 높은 작업이 있다면, queue를 다시 arr 배열의 끝에 추가합니다. (큐의 맨 뒤로 이동)
우선순위가 더 높은 작업이 없다면, answer를 1 증가시킵니다. 이는 해당 작업이 출력되었음을 나타냅니다.
만약 queue의 idx 값이 location과 같아진다면, 현재 작업이 찾고자 하는 문서인 것이므로 반복문을 종료합니다.

결과 반환:
반복문이 종료되면, 모든 작업이 출력되었고 answer는 목표 문서의 출력 순서를 나타냅니다.
answer를 반환합니다.
*/