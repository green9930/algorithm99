function solution(s) {
  let answer = '';

  const arr = s.split(' ').map((val) => parseInt(val));

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  answer = [min, max].join(' ');
  console.log(answer);

  return answer;
}

solution('1 2 3 4');
solution('-1 -2 -3 -4');
solution('-1 -1');
