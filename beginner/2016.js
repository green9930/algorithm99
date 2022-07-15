// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
// EX. a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE" 반환

// 제한 조건
// 2016년은 윤년
// 2016년 a월 b일은 실제로 있는 날 (13월 26일이나 2월 45일같은 날짜는 주어지지 않음)

function solution(a, b) {
  const DAY = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // a달만큼의 총 날짜 수
  let num = 0;

  for (let i = 0; i < a - 1; i++) {
    num += MONTH[i];
  }

  // 1월 1일의 요일[0]은 FRI
  const res = num + (b - 1);

  const answer = DAY[res % 7];
  return answer;
}

solution(1, 1); // FRI
solution(5, 24); // TUE
