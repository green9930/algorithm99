function solution(board, moves) {
  var answer = 0;
  let box = [];

  moves.map((line) => {
    for (let i = 0; i < board.length; i++) {
      let item = board[i][line - 1];

      // 0을 만나면 건너뛰기
      if (item === 0) continue;

      // item이 박스의 마지막의 것과 같다면
      if (item === box[box.length - 1]) {
        box.pop();
        answer += 2;
      } else {
        box.push(item);
      }

      // 중요!
      board[i][line - 1] = 0;
      break;
    }
  });
  return answer;
}
