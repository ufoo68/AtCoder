const inputs = require("fs").readFileSync("/dev/stdin", "utf8").split('\n')

const N = Number(inputs[0])
const PA = inputs.slice(1, N+1).map(v => v.split(' ').map(Number))
const P = [0, ...PA.map(v => v[0])]
const A = [0, ...PA.map(v => v[1])]

const dp = [...new Array(N+1)].map(() => [...new Array(N+1)])
dp[1][N] = 0
for (let len = N-2; len >= 0; len--) {
  for (let l = 1; l <= N - len; l++) {
    const r = l + len
    let score1 = 0
    if (l<=P[l-1] && P[l-1]<=r) {
      score1 = A[l-1]
    }
    let score2 = 0
    if (l<=P[r+1] && P[r+1]<=r) {
      score2 = A[r+1]
    }
    if(l === 1) {
      dp[l][r] = dp[l][r+1] + score2
    } else if (r === N) {
      dp[l][r] = dp[l-1][r] + score1
    } else {
      dp[l][r] = Math.max(dp[l][r+1] + score2, dp[l-1][r] + score1)
    }
  }
}
let answer = 0
for (let i = 1; i <= N; i++) {
  answer = Math.max(answer, dp[i][i])
}
console.log(answer)