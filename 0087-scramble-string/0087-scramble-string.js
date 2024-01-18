/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const hasSameChars = (word1, word2) => {
  // 만약 두 단어의 길이가 다르면 동일한 문자를 가지고 있지 않습니다.
  if (word1.length !== word2.length) return false;

  // 두 단어의 각 문자의 개수를 추적하는 객체를 생성합니다.
  const charCount = {};

  // 두 단어의 각 문자를 확인하며 문자 개수를 업데이트합니다.
  for (let i = 0; i < word1.length; i++) {
    const char1 = word1[i];
    const char2 = word2[i];
    charCount[char1] = char1 in charCount ? charCount[char1] + 1 : 1;
    charCount[char2] = char2 in charCount ? charCount[char2] - 1 : -1;
  }

  // 어떤 문자의 개수라도 0이 아니면 두 단어는 동일한 문자를 가지고 있지 않습니다.
  for (const char in charCount) {
    if (charCount[char] !== 0) return false;
  }

  return true;
};

var isScramble = function (s1, s2, memo = {}) {
  // 메모화 객체의 키를 생성합니다.
  const key = `${s1}-${s2}`;

  // 해당 키에 대한 결과가 이미 계산되었다면 그 결과를 반환합니다.
  if (key in memo) return memo[key];

  // 두 문자열이 동일하면 s1은 s2로 스크램블될 수 있습니다.
  if (s1 === s2) return true;

  // 두 문자열이 동일한 문자를 가지고 있지 않으면 s1은 s2로 스크램블될 수 없습니다.
  if (!hasSameChars(s1, s2)) {
    memo[key] = false;
    return false;
  }

  // s1과 s2의 모든 가능한 분할을 시도하고 결과적인 부분 문자열이 스크램블될 수 있는지 재귀적으로 확인합니다.
  const length = s1.length;

  for (let i = 1; i < length; i++) {
    if (
      (isScramble(s1.slice(0, i), s2.slice(0, i), memo) &&
        isScramble(s1.slice(i), s2.slice(i), memo)) ||
      (isScramble(s1.slice(0, i), s2.slice(length - i), memo) &&
        isScramble(s1.slice(i), s2.slice(0, length - i), memo))
    ) {
      memo[key] = true;
      return true;
    }
  }

  // 어떤 분할도 작동하지 않으면 s1은 s2로 스크램블될 수 없습니다.
  memo[key] = false;
  return false;
};