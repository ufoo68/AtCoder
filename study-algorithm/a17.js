const n=5
const a=[2,4,1,3]
const b=[5,3,7]

const dp=Array(n).fill(0)
const answer = []
dp[0] = 0
dp[1] = a[0]
for (let i=2;i<n;i++){
  dp[i] = Math.min(dp[i-1]+a[i-1],dp[i-2]+b[i-2])
}
let place = n-1
while(true) {
  answer.unshift(place+1)
  if (place === 0) {
    break
  }
  if (dp[place] === dp[place-1]+a[place-1]) {
    place -= 1
  } else {
    place -= 2
  }
}

console.log(answer.join(' '))