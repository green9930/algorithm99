function solution(n) {
  // 총합
  let num = 0;
  // 카운트
  let answer = 0;

  // 1부터 시작, 2부터 시작....
  for (let i = 1; i <= n; i++) {
    // j는 i부터 시작해서 순차적으로 증가
    for (let j = i; j <= n; j++) {
      num += j;
      // 일단 num이 n을 넘는 순간 j포문은 중단하고 num 초기화해야함
      if (num >= n) {
        // num === n이면 answer++
        num === n && answer++;
        num = 0;
        break;
      }
    }
  }

  console.log(answer);
  return answer;
}

solution(15); // 4
