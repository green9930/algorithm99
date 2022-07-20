function solution(n, lost, reserve) {
  let count = n - lost.length;
  let tmp_lost = [];

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      reserve = reserve.filter((element) => element !== lost[i]);
      count++;
    } else {
      // lost, reverse 두 개 모두에 속하지 않은 원소를 따로 저장해둔다.
      tmp_lost.push(lost[i]);
    }
  }
  lost = tmp_lost;

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      // 자기보다 왼쪽에 있는 경우
      reserve = reserve.filter((e) => e !== lost[i] - 1);
      count++;
    } else if (reserve.includes(lost[i] + 1)) {
      // 자기보다 오른쪽에 있는 경우
      reserve = reserve.filter((e) => e !== lost[i] + 1);
      count++;
    }
  }

  return count;
}

solution(5, [2, 4], [1, 3, 5]); // 5

solution(5, [2, 4], [3]); // 4

solution(5, [2, 3, 4], [4, 5]); // 4

// 출처 : https://velog.io/@sqaurelu/ALGO-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B2%B4%EC%9C%A1%EB%B3%B5%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-javascript

// 실패
// function solution(n, lost, reserve) {
//   // 여벌 옷을 갖고 있던 학생이 도둑맞으면 빌려줄 수 없음
//   const lostArr = lost.filter((val) => !reserve.includes(val));
//   console.log(lostArr);
//   let reserveArr = reserve.filter((val) => !lost.includes(val));
//   console.log(reserveArr);

//   let answer = n - lostArr.length;

//   // lostArr.sort((a, b) => a - b);

//   for (let i = 0; i < lostArr.length; i++) {
//     for (let j = 0; j < reserveArr.length; j++) {
//       const lostTarget = lostArr[i];
//       if (reserve.includes(lostTarget - 1)) {
//         reserveArr = reserveArr.filter((val) => val !== lostTarget - 1);
//         answer++;
//       } else if (reserve.includes(lostTarget + 1)) {
//         reserveArr = reserveArr.filter((val) => val !== lostTarget + 1);
//         answer++;
//       }
//     }
//   }
//   console.log(answer);

//   return answer;
// }
