function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let arr = array.slice(commands[i][0] - 1, commands[i][1]);
    arr.sort((a, b) => a - b);

    const k = arr[commands[i][2] - 1];
    answer.push(k);
  }

  console.log(answer);
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
