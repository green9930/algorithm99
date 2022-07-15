// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

function solution(n) {
  const arr = (n + '').split('');
  const answer = arr.reverse().map((item) => parseInt(item));

  console.log(answer);
  return answer;
}

solution(12345);
solution(21569);
