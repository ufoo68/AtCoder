const S='tokyo'.split('')
const T='kyoto'.split('')
const dp = [...new Array(S.length+1)].map(() => [...new Array(T.length+1)].map(() => 0))
dp[0][0] = 0

for (let i=1; i<=S.length; i++) {
  for (let j=1; j<=T.length; j++) {
    if (S[i-1] === T[j-1]) dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]+1)
    else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
  }
}

console.log(dp)