/*
문제 설명
주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.

항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
- 모든 공항은 알파벳 대문자 3글자로 이루어집니다.
- 주어진 공항 수는 3개 이상 10,000개 이하입니다.
- tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
- 주어진 항공권은 모두 사용해야 합니다.
- 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
- 모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.
*/

function solution(tickets) {
    var answer = [];
    // 모든 항공권에 대해서 출발 공항을 key로 도착 공항을 value로 갖는 Map 생성
    const ticketPath = tickets.reduce((prev, ticket) => {
        prev.set(ticket[0], prev.get(ticket[0]) ? [...prev.get(ticket[0]), ticket[1]] : [ticket[1]]);
        return prev;
    }, new Map());
    
    // Map을 기반으로 깊이 우선 탐색(DFS)을 통해 경로들을 문자열로 구한다
    // 시작 공항은 ICN으로
    getTravelPath(ticketPath, 'ICN');
    
    function getTravelPath(pathMap, path, count = 1){
        const curAirport = path.substring(path.length - 3);
        if(count === tickets.length + 1){
            answer.push(path);
            return;
        }
        for(let i=0; i<(pathMap.get(curAirport) || []).length; i++){
            const curPath = pathMap.get(curAirport);
            const airPort = curPath.shift();
            // 경로 문자열은 구분자(',', ' '와 같은)를 통해 공항명 구분
            getTravelPath(pathMap, path + ',' + airPort, count + 1);
            curPath.push(airPort);
            pathMap.set(curAirport, curPath);
        }
    }
    // 구해진 경로를 알파벳으로 정렬하여 가장 앞의 경로를 배열로 변환하여 반환
    answer.sort();
    
    return answer[0].split(',');
}

/*
변수 초기화:
answer 배열을 빈 배열로 초기화합니다. 이 배열은 가능한 모든 경로들을 담습니다.

ticketPath Map 생성:
tickets 배열을 순회하면서 출발 공항을 key로, 도착 공항을 value로 하는 Map인 ticketPath를 생성합니다.
출발 공항이 이미 ticketPath에 존재하는 경우 해당 key의 value에 도착 공항을 추가합니다. 존재하지 않는 경우 새로운 배열로 value를 설정합니다.

getTravelPath 함수:
깊이 우선 탐색(Depth-First Search, DFS)을 수행하는 재귀 함수입니다.
pathMap은 항공권의 출발 공항과 도착 공항의 관계를 담은 Map입니다.
path는 현재까지의 경로를 나타내는 문자열입니다.
count는 현재까지 이동한 항공권의 수를 나타냅니다.
curAirport는 현재 공항 코드를 추출한 것입니다.
count가 항공권 수에 1을 더한 값과 같을 때, 즉 모든 항공권을 사용한 경우, path를 answer 배열에 추가하고 함수를 종료합니다.
현재 공항에서 출발하는 항공권들을 순회하면서 재귀적으로 다음 경로를 탐색합니다.
다음 공항으로 이동한 후에는 다시 이전 상태로 돌아와야 하므로, 순회한 항공권을 다시 해당 출발 공항의 배열에 추가합니다.

answer 배열 정렬 및 반환:
answer 배열을 알파벳 순서로 정렬합니다.
정렬된 경로 중 첫 번째 경로를 선택하여 ,를 구분자로 문자열을 나누어 배열로 변환하여 반환합니다.
*/