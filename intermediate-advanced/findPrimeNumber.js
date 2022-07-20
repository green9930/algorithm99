/* 에라토스테네스의 체 --------------------------------------------------------------- */
function solution(n) {
  let answer = 0;
  const arr = new Array(n + 1).fill(true);

  for (let i = 2; i <= n; ++i) {
    // 소수가 아닌 인덱스 값은 패스
    if (arr[i] === false) {
      continue;
    }

    // 배수는 소수가 아닌 0으로 설정
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = false;
    }
  }

  // 소수의 개수 구하기
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      answer++;
    }
  }

  console.log(answer);
  return answer;
}

solution(10); // 4
solution(5); // 3

/* 시간초과 --------------------------------------------------------------------- */
// function solution(n) {
//   var answer = 0;
//   let arr = [];

//   for (let i = 2; i <= n; i++) {
//     let divisorArr = [];

//     for (let j = 1; j <= i; j++) {
//       if (divisorArr.length > 2) break;
//       if (i % j === 0) divisorArr.push(j);
//     }

//     divisorArr.length === 2 && arr.push(divisorArr);

//   }
//   answer = arr.length;

//   return answer;
// }
