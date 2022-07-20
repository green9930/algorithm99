function solution(dartResult) {
  let arr = [];
  let num = 0;

  for (let i = 0; i < dartResult.length; i++) {
    // 정규식으로 숫자 찾을 때 10 구분하기
    if (dartResult[i].match(/[0-9]/)) {
      if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
        num = 10;
        // 10 찾으면 다음 0 패스해야되기 때문에 i++
        i++;
      } else {
        num = dartResult[i];
      }
    }

    switch (dartResult[i]) {
      // 'S':1제곱
      case 'S':
        arr.push(Math.pow(num, 1));
        break;
      //'D':2제곱
      case 'D':
        arr.push(Math.pow(num, 2));
        break;
      // 'T':3제곱
      case 'T':
        arr.push(Math.pow(num, 3));
        break;
      // 해당 숫자는 직전에 arr에 push되었던 arr[arr.length - 1]인 값
      // '*':배열에 숫자 1개 있으면 해당 숫자만 *2 or 2개 있으면 해당 숫자, 앞 숫자 *2
      case '*':
        if (arr.length === 1) {
          arr[arr.length - 1] *= 2;
        } else {
          arr[arr.length - 1] *= 2;
          arr[arr.length - 2] *= 2;
        }
        break;
      // '#': 해당 숫자만 *-1
      case '#':
        arr[arr.length - 1] *= -1;
        break;
      default:
        break;
    }

    // console.log(arr);
  }

  const answer = arr.reduce((acc, cur) => acc + parseInt(cur), 0);

  console.log(answer);
  // return answer;
}

solution('1S2D*3T'); // 37
solution('1D2S#10S'); // 9
solution('1D2S0T'); // 3
solution('1S*2T*3S'); // 23
solution('1D#2S*3S'); // 5
solution('1T2D3D#'); // -4
solution('1D2S3T*'); // 59
