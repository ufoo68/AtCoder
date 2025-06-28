const inputs = require("fs").readFileSync("/dev/stdin", "utf8").split('\n')

const NM = inputs[0].split(' ').map(Number)
const N = NM[0]
const M = NM[1]
const A = inputs.slice(1, M+1).map(v => v.split(' ').map(Number))
const dp = [...new Array(N+1)].map(() => [...new Array(N+1)].map(() => Number.MAX_SAFE_INTEGER))
dp[0][0] = 0
for (let i=1; i<=M; i++) {
  for (let j=0; j < ())
}

console.log(N, M, A)