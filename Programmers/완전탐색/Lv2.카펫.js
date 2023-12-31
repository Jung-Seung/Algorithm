/*
문제 설명
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
- 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
- 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
- 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

입출력 예
brown	yellow	return
10	    2	    [4, 3]
8	    1	    [3, 3]
24	    24	    [8, 6]
*/

function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;
    
    //카펫의 최소높이는 3부터이다.(위아래 갈색, 가운데가 노란색이기 때문에)
    for(let height=3; height<=brown; height++){
        //임의의 높이로 나눌때 나머지가 없을경우만
        if(sum % height === 0){
            //가로길이
            let weight = sum / height;
            
            //테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈
            //결과가 yellow와 같다면 해당 높이와 길이 리턴
            if( (height-2) * (weight-2) === yellow){
                return [weight, height];
            }
        }
    }
    return answer;
}

/*
먼저, 브라운 타일과 노란 타일의 개수를 합한 값을 sum 변수에 저장합니다.

카펫의 최소 높이는 3부터 시작해야 합니다. 이는 카펫의 위, 아래에 브라운 타일이 오고, 가운데가 노란 타일로 채워져 있어야 하기 때문입니다.

for 루프를 이용하여 높이를 3부터 brown까지 증가시키면서, sum을 해당 높이로 나누어서 나머지가 없는 경우를 찾습니다. 이는 가능한 카펫의 높이를 의미합니다.

나머지가 없는 높이(height)를 찾으면, 해당 높이로 나눈 몫을 weight 변수에 저장합니다. 이는 가능한 카펫의 가로 길이를 의미합니다.

그 다음, 카펫의 테두리를 제외한 부분의 넓이를 계산하여 노란 타일의 개수(yellow)와 같은지 확인합니다. 카펫의 테두리를 제외한 넓이는 (높이-2) * (가로길이-2)로 계산됩니다.

노란 타일의 개수와 카펫의 테두리를 제외한 넓이가 같다면, 해당 높이와 가로 길이를 배열로 반환합니다. 이렇게 찾은 높이와 가로 길이는 브라운 타일과 노란 타일로 구성된 카펫의 크기를 나타냅니다.

만약 조건을 만족하는 카펫의 크기를 찾지 못했다면, 빈 배열을 반환합니다.
*/