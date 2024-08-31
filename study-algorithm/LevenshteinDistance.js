const S='kyoto'
const T='tokyo'

const dp=[...new Array(S.length+1)].map(() => [...new Array(T.length+1)].map(() => 0))
for(let i=0; i<=S.length; i++) dp[i][0] = i
for(let i=0; i<=T.length; i++) dp[0][i] = i

for (let i=1; i<=S.length; i++) {
  for (let j=1; j<=T.length; j++) {
    if(S[i-1] === T[j-1]) dp[i][j] = Math.min(dp[i][j-1]+1, dp[i-1][j]+1, dp[i-1][j-1])
    else dp[i][j] = Math.min(dp[i][j-1]+1, dp[i-1][j]+1, dp[i-1][j-1]+1)
  }
}

console.log(dp[S.length][T.length])