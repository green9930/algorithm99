function solution(n, arr1, arr2) {
  let answer = [];

  // 2진수 배열1
  const binary1 = toBinary(n, arr1);
  // 2진수 배열2
  const binary2 = toBinary(n, arr2);

  // 두 2진수 배열 더하기
  for (let i = 0; i < n; i++) {
    sum = (parseInt(binary1[i]) + parseInt(binary2[i])).toString().split('');
    // console.log(sum); // [ '1', '1', '2', '1', '2', '1' ]
    const binarySum = sum.map((val) => (parseInt(val) >= 1 ? '#' : ' '));
    // console.log(binarySum); // [ '#', '#', '#', '#', '#', '#' ] 단, 가장 앞자리에 0이 있는 경우 binarySum.length !== n
    answer.push(binarySum.join('').padStart(n, ' '));
  }

  console.log(answer);
  return answer;
}

const toBinary = (n, arr) => {
  let binaryArr = [];
  for (let i = 0; i < n; i++) {
    binaryArr.push(arr[i].toString(2).padStart(n, 0));
  }

  return binaryArr;
};

// solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
