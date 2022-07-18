function solution(d, budget) {
  let cost = 0;
  let answer = 0;

  // 예산 배열을 오름차순으로 정렬한 다음 예산 초과 전까지 더한다.
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    cost += d[i];
    answer++;

    // 예산 초과하면 카운트 올라갔던 answer 차감
    cost > budget && answer--;
  }

  console.log(answer);
  return answer;
}

solution([1, 3, 2, 4, 5], 9);
// solution([2, 2, 3, 3], 10);
