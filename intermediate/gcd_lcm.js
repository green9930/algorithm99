function solution(n, m) {
  const answer = [findGcd(n, m), findLcm(n, m)];

  console.log(answer);
  return answer;
}

findGcd = (n, m) => {
  let gcdlist1 = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) gcdlist1.push(i);
  }

  let gcdlist2 = [];
  for (let i = 1; i <= m; i++) {
    if (m % i === 0) gcdlist2.push(i);
  }

  const gcd = Math.max(...gcdlist1.filter((val) => gcdlist2.includes(val)));

  // console.log(gcdlist1, gcdlist2);
  // console.log(gcd);

  return gcd;
};

// 단순 배수 목록 만들어서 비교하면 시간 초과 오류 발생
findLcm = (n, m) => {
  let large = 0;
  let small = 0;

  if (n > m) {
    large = n;
    small = m;
  } else {
    large = m;
    small = n;
  }

  let lcmlist1 = [];
  for (let i = 1; i <= n * m; i++) {
    lcmlist1.push(small * i);
  }

  for (let i = 1; i <= n * m; i++) {
    const multiple = large * i;
    if (lcmlist1.includes(multiple)) {
      return multiple;
    }
  }
};

solution(3, 12);
solution(2, 5);
