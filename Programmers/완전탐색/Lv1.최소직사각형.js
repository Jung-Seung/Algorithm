/*
문제 설명
명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다.
이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

명함 번호	가로 길이	세로 길이
1	60	50
2	30	70
3	60	30
4	80	40
가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다.
하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때,
지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

제한사항
- sizes의 길이는 1 이상 10,000 이하입니다.
- sizes의 원소는 [w, h] 형식입니다.
- w는 명함의 가로 길이를 나타냅니다.
- h는 명함의 세로 길이를 나타냅니다.
- w와 h는 1 이상 1,000 이하인 자연수입니다.
*/

function solution(sizes){
  // 가로 길이와 세로 길이를 담을 배열 w, h
  let w = []
  let h = []
  // 이차원 배열의 큰 값과 작은 값을 구분해서 큰 값은 w, 작은 값은 h에 넣어줍니다.
  sizes.map((v,i) => {
    w[i]=Math.max(...v)
    h[i]=Math.min(...v)
  })
  // w 와 h 에서 서로 가장 큰 값을 곱하면 끝
  return Math.max(...w)*Math.max(...h)
}

/*
1. 가로 길이와 세로 길이를 담을 배열 w와 h를 선언합니다. 이 배열들은 각 원소(배열)의 가로와 세로 길이를 저장할 예정입니다.

2. 이차원 배열 sizes를 순회하면서 가로와 세로 길이를 분리합니다. map 메서드를 사용하여 각 원소(배열)에 대해 가로 길이를 w 배열에 저장하고, 세로 길이를 h 배열에 저장합니다.
   이 때, Math.max와 Math.min 함수를 사용하여 가로와 세로 길이를 구분합니다.

3. 가로와 세로 길이를 분리한 후, w 배열과 h 배열에서 가장 큰 값을 각각 찾습니다. Math.max 함수를 사용하여 w 배열의 가장 큰 값을 구하고, Math.max 함수를 사용하여 h 배열의 가장 큰 값을 구합니다.

4. 최대 넓이를 구합니다. w 배열에서 가장 큰 값과 h 배열에서 가장 큰 값 두 개를 곱하여 최대 넓이를 구합니다.

5. 최대 넓이를 반환합니다.
*/