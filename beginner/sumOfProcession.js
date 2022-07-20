function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let innerArr = [];
    for (let j = 0; j < arr1[0].length; j++) {
      const sum = arr1[i][j] + arr2[i][j];
      console.log(sum);
      innerArr.push(sum);
    }
    console.log(innerArr);
    answer.push(innerArr);
  }
  // console.log(answer);
  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
); // [[4,6],[7,9]]
