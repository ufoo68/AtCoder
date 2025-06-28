const inputs = require("fs").readFileSync("/dev/stdin", "utf8").split('\n')

const N = Number(inputs[0])
const A = [0, ...inputs[1].split(' ').map(Number)]
const B = [0, ...inputs[2].split(' ').map(Number)]

const dp = [...new Array(N+1)].map(() => -Number.MAX_SAFE_INTEGER)
dp[1] = 0

for (let i = 1; i <= N - 1; i++) {
  dp[A[i]] = Math.max(dp[A[i]], dp[i] + 100)
  dp[B[i]] = Math.max(dp[B[i]], dp[i] + 150)
}

console.log(dp[N])