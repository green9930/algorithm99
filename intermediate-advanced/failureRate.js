function solution(N, stages) {
  let arr = [];
  let players = stages.length;

  for (let i = 1; i <= N; i++) {
    const failure = stages.filter((val) => val === i).length;
    // console.log(failure);

    arr.push([i, failure / players]);

    // 다음 레벨 넘어가기 전에 실패한 사람 제외 : 그래야 다음 레벨 통과한 사람 중에 실패율 구할 수 있음
    players -= failure;
    // console.log(arr);
  }

  arr.sort((a, b) => b[1] - a[1]);
  const answer = arr.map((val) => val[0]);

  console.log(answer);
  return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); // [3,4,2,1,5]
solution(4, [4, 4, 4, 4, 4]); // [4,1,2,3]
