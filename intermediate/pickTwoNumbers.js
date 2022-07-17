// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
// 입출력 예
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]
// 입출력 예 설명
// 입출력 예 #1

// 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
// 3 = 2 + 1 입니다.
// 4 = 1 + 3 입니다.
// 5 = 1 + 4 = 2 + 3 입니다.
// 6 = 2 + 4 입니다.
// 7 = 3 + 4 입니다.
// 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
// 입출력 예 #2

// 2 = 0 + 2 입니다.
// 5 = 5 + 0 입니다.
// 7 = 0 + 7 = 5 + 2 입니다.
// 9 = 2 + 7 입니다.
// 12 = 5 + 7 입니다.
// 따라서 [2,5,7,9,12] 를 return 해야 합니다.

function solution(numbers) {
  let answer = [];
  let arr = [];

  // 배열 내부의 다른 인덱스끼리 더한 값의 배열 생성
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      arr = [...arr, sum];
    }
  }

  // arr에서 중복되는 값 제거
  answer = arr.filter((val, idx) => arr.indexOf(val) === idx);

  // sort() : [12, 2, 5, 7, 9] 이런 식으로 나옴
  // sort 메서드의 기본 정렬 순서는 유니코드 코드 포인트의 순서를 따름
  // 배열에 무슨 타입의 값이 올지 몰라 sort 함수가 자체적으로 문자열로 바꾼 다음에 비교한다.
  // 따라서 정렬 순서를 정의하는 비교 함수를 인수로 전달해야 한다.
  answer.sort((a, b) => a - b);
  console.log(answer);

  return answer;
}

solution([2, 1, 3, 4, 1]);
solution([5, 0, 2, 7]);
