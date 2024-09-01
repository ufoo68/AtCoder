const inputs = require("fs").readFileSync("/dev/stdin", "utf8").split('\n')
const N = Number(inputs[0])
const AS = inputs.slice(1, N+1).map(v => v.split(' '))
const A = AS.map(v => Number(v[0]))
const S = AS.map(v => v[1])

let answer = 0
let preL = 0
let preR = 0

for (let i = 0; i < N; i++) {
  if(S[i] === 'L') {
    if (preL > 0) answer += Math.abs(preL - A[i])
    preL = A[i]
  } else if (S[i] === 'R') {
    if (preR > 0) answer += Math.abs(preR - A[i])
    preR = A[i]
  }
}

console.log(answer)