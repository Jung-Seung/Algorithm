/*
문제 설명
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

제한사항
- genres[i]는 고유번호가 i인 노래의 장르입니다.
- plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
- genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
- 장르 종류는 100개 미만입니다.
- 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
- 모든 장르는 재생된 횟수가 다릅니다.
*/

function solution(genres, plays) {
    // 장르명을 key값으로, [노래, idx, 재생횟수]를 value로 가지는 해시 테이블을 배열로 제작
    const genresByHash = genres.reduce((prev, cur, idx) => {
        if(typeof prev[cur] !== 'object'){
            prev[cur] = [[idx, plays[idx]]];
        } else {
            prev[cur].push([idx, plays[idx]]);
        }
        return prev;
    }, []);
    
    // 위에서 만든 해시 테이블을 통해 장르별 전체 곡 재생수를 담고 있는 장르 리스트를 제작
    let genresList = [];
    for(let genresName in genresByHash){
        genresByHash[genresName].sort((a,b) => ((b[1] - a[1])));
        const allPlayCount = genresByHash[genresName].reduce((prev, cur) => {
            return prev + cur[1];
        }, 0);
        genresList.push([genresName, allPlayCount]);
    }
    // 위에서 만든 장르 리스트를 곡 재생수 내림차순으로 정렬
    genresList.sort((a, b) => (b[1] - a[1]));
    
    // 장르 리스트 순서대로 장르에 속해있는 최대 재생 수 2곡을 순서대로 담은 리스트를 반환
    const answer = genresList.reduce((prev, cur) => {
        const length = genresByHash[cur[0]].length;
        for(let i=0;i<(length > 2 ? 2 : length);i++){
            prev.push(genresByHash[cur[0]][i][0]);
        }
        return prev;
    }, []);
    
    return answer;
}

/*
genresByHash 해시 테이블 생성:
genres.reduce 메서드를 사용하여 genres 배열을 순회합니다. 각 요소(cur)는 장르의 이름(genres)을 나타냅니다.
genresByHash 객체를 초기에 빈 배열로 선언합니다.
typeof prev[cur] !== 'object' 조건을 사용하여 해당 장르의 정보가 아직 없는 경우, 새로운 배열로 초기화합니다.
이미 해당 장르의 정보가 존재하는 경우, 해당 장르 배열에 현재 곡의 인덱스(idx)와 재생 횟수(plays[idx])를 저장합니다.

genresList 장르 리스트 생성:
for...in 구문을 사용하여 genresByHash 객체의 각 속성(key)을 순회합니다. 각 속성(key)은 장르의 이름(genres)을 나타냅니다.
각 장르별로 곡 정보를 재생 횟수(plays)를 기준으로 내림차순 정렬합니다.
각 장르별 전체 곡의 재생 횟수를 구합니다. 이를 위해 reduce 메서드를 사용하여 재생 횟수를 누적합니다.
genresList 배열에 [장르 이름, 전체 재생 횟수] 형태로 저장합니다.

genresList 장르 리스트 정렬:
genresList 배열을 전체 재생 횟수를 기준으로 내림차순 정렬합니다. 이로써 가장 많이 재생된 장르가 배열의 앞으로 오게 됩니다.

최대 재생 횟수 2곡 선택:
genresList.reduce 메서드를 사용하여 genresList 배열을 순회합니다. 각 요소(cur)는 [장르 이름, 전체 재생 횟수] 형태의 배열입니다.
genresByHash[cur[0]]를 통해 해당 장르에 속해있는 곡들의 배열을 가져옵니다.
해당 장르의 곡들은 이미 재생 횟수를 기준으로 내림차순으로 정렬되어 있습니다.
length > 2 ? 2 : length를 사용하여 해당 장르에 속한 곡이 2곡 미만인 경우에는 모든 곡을 선택하고, 그렇지 않은 경우에는 최대 2곡까지만 선택합니다.
선택된 곡들의 인덱스([idx, plays[idx]]에서 idx)를 prev 배열에 추가합니다.

선택된 곡 인덱스(prev) 반환:
최대 재생 횟수 2곡씩 선택된 곡들의 인덱스(prev) 배열을 반환합니다.
*/

/*
먼저, genres 배열과 plays 배열을 이용하여 장르별로 노래들을 그룹화하고 재생 횟수를 누적하여 계산합니다. 
이를 위해 genres 배열을 reduce 메서드를 사용하여 해시 테이블 genresByHash를 만듭니다. 
genresByHash 객체는 각 장르를 key로 하고, 해당 장르에 속한 노래들의 정보를 value로 하는 배열을 가지고 있습니다. 배열의 각 요소는 [노래 인덱스, 재생 횟수]로 구성되어 있습니다.

다음으로, 각 장르별 전체 곡의 재생 횟수를 담은 genresList 배열을 만듭니다. 이 배열은 [장르 이름, 전체 곡 재생 횟수]로 구성됩니다. 
장르 이름과 전체 곡 재생 횟수를 담은 genresList 배열을 재생 횟수 기준으로 내림차순으로 정렬합니다.

마지막으로, 장르 리스트 순서대로 장르에 속해 있는 최대 재생 횟수 2곡을 순서대로 담은 answer 배열을 만듭니다. 이를 위해 genresList 배열을 reduce 메서드를 사용하여 장르별 최대 재생 횟수 2곡을 answer 배열에 추가합니다.

최종적으로, answer 배열을 반환하여 결과를 얻습니다. 이로써 주어진 조건에 맞게 음악 장르의 순위와 최대 재생 수 2곡을 구하는 함수가 완성됩니다.
*/