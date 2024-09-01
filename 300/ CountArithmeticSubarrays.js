const inputs = require("fs").readFileSync("/dev/stdin", "utf8").split('\n')

const N = Number(inputs[0])
const A = inputs[1].split(' ').map(Number)

let answer = N
let pre = 0
for (let i = 0; i < N-1; i++) {
  if (A[i] - A[i - 1] !== A[i + 1] - A[i]) {
    answer += (i - pre) * (i - pre + 1) / 2
    pre = i
  }
}

answer += (N - pre - 1) * (N - pre) / 2

console.log(answer)