function solution(nums) {
  let arr = [];
  const max = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (arr.length < max) {
      !arr.includes(nums[i]) && arr.push(nums[i]);
    }
  }

  const answer = arr.length;
  console.log(answer);
  return answer;
}

solution([3, 1, 2, 3]);
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);
