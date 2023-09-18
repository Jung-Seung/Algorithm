/*
문제 설명
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
- numbers는 길이 1 이상 7 이하인 문자열입니다.
- numbers는 0~9까지 숫자만으로 이루어져 있습니다.
- "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

입출력 예

numbers	    return
"17"	    3
"011"	    2

입출력 예 설명
예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

- 11과 011은 같은 숫자로 취급합니다.
*/

// 방법 1
function solution(numbers) {
    return [...new Set(getPer(numbers))].filter(v => isPrime(v)).length;
}

const getPer = (str) => {
    const answer = [];
    const n = str.length;
    let ch = Array.from({ length: n }, () => 0);
    
    const dfs = (curStr) => {
        answer.push(+curStr);
        for (let i = 0; i < n; i++) {
            if (ch[i] === 0) {
                ch[i] = 1;
                dfs(curStr + str[i]);
                ch[i] = 0;
            }
        }
    }
    dfs('');
    answer.shift();
    return answer;
}

const isPrime = (n) => {
    if (n === 0 || n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

/*
getPer 함수: 순열을 구하는 함수입니다. 재귀적으로 가능한 모든 순열을 생성합니다. dfs 함수를 사용하여 현재 만들어진 순열을 기록하고, 해당 순열을 숫자로 변환하여 answer 배열에 저장합니다. 
             dfs 함수를 호출하여 순열을 생성합니다.

isPrime 함수: 주어진 숫자 n이 소수인지 판별하는 함수입니다. 0과 1은 소수가 아니므로 false를 반환합니다. 그 이후에는 2부터 Math.sqrt(n)까지의 숫자로 나누어지는지 확인하여 소수인지 여부를 결정합니다.

solution 함수: 주어진 numbers 배열을 이용하여 가능한 모든 순열을 생성하고, 그 중 소수인 순열의 개수를 반환합니다. getPer 함수를 사용하여 순열을 생성하고, isPrime 함수를 사용하여 소수인지 판별합니다. 
               Set 객체를 사용하여 중복된 순열을 제거한 뒤, 소수인 순열의 개수를 반환합니다.
*/

// 방법 1 - 최적화
function solution(numbers) {
    const isPrime = (n) => {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    const getPermutations = (arr, n) => {
        const results = [];
        if (n === 1) return arr.map(String);
        
        for (let i = 0; i < arr.length; i++) {
            const fixed = arr[i];
            const rest = arr.filter((_, idx) => idx !== i);
            const permutations = getPermutations(rest, n - 1);
            const attached = permutations.map((perm) => fixed + perm);
            results.push(...attached);
        }

        return results;
    }

    const uniquePermutations = new Set(getPermutations(numbers.split(""), numbers.length));
    return Array.from(uniquePermutations)
        .map(Number)
        .filter(isPrime)
        .length;
}

/*
먼저, isPrime 함수는 주어진 숫자가 소수인지를 판별하는 함수입니다. 숫자가 2보다 작거나, 2부터 제곱근까지의 숫자로 나누어 떨어지는 경우 소수가 아닙니다. 그 외의 경우는 소수로 판별합니다.

다음으로, getPermutations 함수는 arr 배열에서 길이가 n인 모든 순열을 구하는 함수입니다. 재귀적으로 조합을 만들어나가는 방식으로 작동합니다. 모든 순열은 results 배열에 추가됩니다.

uniquePermutations는 중복되지 않는 모든 순열을 담기 위해 Set 객체를 사용하여 생성합니다.

마지막으로, uniquePermutations에 담긴 모든 숫자를 순회하며 isPrime 함수로 소수를 판별하고, 소수인 숫자들의 개수를 반환합니다.

이렇게 주어진 numbers로 만들 수 있는 모든 숫자 조합을 생성하고, 그 중에서 소수인 숫자들의 개수를 효율적으로 계산하여 반환하는 함수입니다.
*/

// 방법 2
function solution(numbers) {
    // 숫자 리스트(numbers)를 쪼개어 종이 조각으로 만든다
    const numberList = numbers.split('').reduce((prev, cur) => {
        prev.push(['', cur])
        return prev
    }, [])

    // 종이 조각들로 만들 수 있는 모든 숫자를 만든다
    const primeNumbers = makeNumbers(numberList)
    // 소수인 숫자들의 개수를 반환
    return primeNumbers.size
}

function makeNumbers(list, checkedIndices = [], numbers = [], primeNumbers = new Set()) {
    if(list.length === checkedIndices.length){
        const number = parseInt(numbers.join(''))
        // 만들어진 숫자 중 소수인 경우만 따로 정리
        if(checkPrimeNumber(number)){
            primeNumbers.add(number)
        }
        return primeNumbers
    }

    for(let i=0;i<list.length;i++){
        if(!checkedIndices.includes(i)){
            checkedIndices.push(i)
            for(let j=0;j<2;j++){
                numbers.push(list[i][j])
                primeNumbers = makeNumbers(list, checkedIndices, numbers, primeNumbers)
                numbers.pop()
            }
            checkedIndices.pop()
        }
    }
    return primeNumbers
}

function checkPrimeNumber(number){
    if(number === 0 || number === 1 || isNaN(number)){
        return false
    }
    for(let i=2;i<=number;i++){
        if(number % i === 0){
            return false
        }
    }
    return true;
}

/*
solution 함수:
numbers 문자열을 한 글자씩 쪼개어 numberList 배열을 생성합니다. 이 배열은 종이 조각을 표현하며, 초기에는 빈 문자열('')과 해당 숫자로 이루어진 배열로 구성됩니다.
makeNumbers 함수를 호출하여 종이 조각들로 만들 수 있는 모든 숫자를 생성합니다.
primeNumbers 변수에는 소수인 숫자들을 모아둔 Set 객체가 반환됩니다.
primeNumbers의 크기를 반환하여, 종이 조각으로 만들 수 있는 소수인 숫자들의 개수를 구합니다.

makeNumbers 함수:
list: 종이 조각들로 만들어야 하는 숫자들을 담은 배열입니다.
checkedIndices: 숫자들의 조합을 만들 때, 이미 확인한 인덱스를 저장하는 배열입니다.
numbers: 현재까지 만들어진 숫자들을 담은 배열입니다.
primeNumbers: 소수인 숫자들을 저장하는 Set 객체입니다.
재귀적으로 모든 조합을 만들기 위해 DFS 방식을 사용합니다.
현재까지 만들어진 numbers 배열을 합쳐서 숫자로 변환한 뒤, checkPrimeNumber 함수를 이용하여 소수인지 확인합니다.
만약 해당 숫자가 소수라면 primeNumbers에 추가합니다.

checkPrimeNumber 함수:
입력으로 주어진 number가 소수인지 판별하는 함수입니다.
0, 1, 그리고 NaN인 경우는 소수가 아니므로 false를 반환합니다.
2부터 number까지의 숫자로 나누어지는지 확인하여 소수 여부를 판별합니다.
*/

// 방법 2 - 개선
function solution(numbers) {
    const numberList = numbers.split('').reduce((prev, cur) => {
        prev.push(['', cur]);
        return prev;
    }, []);

    const primeNumbers = new Array();
    makeNumbers(numberList);

    return primeNumbers.filter(number => checkPrimeNumber(number)).length;
}

function makeNumbers(list, checkedIndices = [], numbers = []) {
    if (list.length === checkedIndices.length) {
        const number = parseInt(numbers.join(''));
        primeNumbers.push(number);
        return;
    }

    for (let i = 0; i < list.length; i++) {
        if (!checkedIndices.includes(i)) {
            checkedIndices.push(i);
            for (let j = 0; j < 2; j++) {
                numbers.push(list[i][j]);
                makeNumbers(list, checkedIndices, numbers);
                numbers.pop();
            }
            checkedIndices.pop();
        }
    }
}

function checkPrimeNumber(number) {
    if (number === 0 || number === 1 || isNaN(number)) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

/*
먼저, 주어진 numbers를 numberList로 변환합니다. numberList는 가능한 모든 숫자를 만들기 위해 가로와 세로 조합을 담은 2차원 배열입니다. 예를 들어, '17'이라면 numberList는 [['', '1'], ['', '7']]와 같이 구성됩니다.

다음으로, makeNumbers 함수를 호출하여 numberList에서 가능한 모든 숫자들을 생성합니다. makeNumbers 함수는 재귀적으로 모든 가로와 세로 조합을 테스트하며, 조합이 완성되면 해당 숫자를 primeNumbers 배열에 추가합니다.

마지막으로, primeNumbers 배열에서 checkPrimeNumber 함수를 이용하여 소수를 판별합니다. checkPrimeNumber 함수는 주어진 숫자가 소수인지 여부를 판별합니다. 판별된 소수들의 개수를 반환하여 최종 결과를 얻습니다.

전체적인 코드 흐름은 다음과 같습니다:
1. numbers를 numberList로 변환
2. primeNumbers 배열 선언
3. makeNumbers 함수 호출하여 모든 가능한 숫자 생성
4. primeNumbers 배열에서 소수 판별 후, 소수인 숫자들의 개수 반환
*/