const n=3
const s=7
const a=[2,2,3]
a.unshift(0)

const dp = [...new Array(n+1)].map(() => [...new Array(s+1)].map(() => false))
dp[0][0] = true;

for(let i=1; i<=n; i++) {
  for(let j=0; j<=s; j++) {
    if (j<a[i] && dp[i-1][j]) {
      dp[i][j] = true
    }
    if (j>=a[i] && (dp[i-1][j] || dp[i-1][j-a[i]])) {
      dp[i][j] = true
    }
  }
}

console.log(dp[n][s])