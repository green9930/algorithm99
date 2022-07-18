function solution(n) {
  let divisorList = [];

  for (let i = 1; i <= n; i++) {
    n % i === 0 && divisorList.push(i);
  }

  console.log(divisorList);

  const answer = divisorList.reduce((acc, cur) => acc + cur, 0);

  console.log(answer);
  return answer;
}

solution(12);
solution(5);
