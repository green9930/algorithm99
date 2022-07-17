function solution(lottos, win_nums) {
  let answer = [];

  const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const zero = lottos.filter((lotto) => lotto === 0).length;

  const correctNum = 7 - correct >= 6 ? 6 : 7 - correct;
  let max = correctNum - zero < 1 ? 1 : correctNum - zero;

  answer = [max, correctNum];
  return answer;
}
