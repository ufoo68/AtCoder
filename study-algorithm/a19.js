const N=4
const W=7
const w=[3,3,5,1]
const v=[13,17,29,10]
w.unshift(0)
v.unshift(0)

const dp = [...new Array(N+1)].map(() => [...new Array(W+1)].map(() => -Number.MAX_VALUE))
dp[0][0] = 0;
for(let i=1; i<=N; i++) {
  for(let j=0; j<=W; j++) {
    if (j<w[i]) dp[i][j] = dp[i-1][j];
    else dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-w[i]]+v[i])
  }
}
console.log(Math.max(...dp[N]))