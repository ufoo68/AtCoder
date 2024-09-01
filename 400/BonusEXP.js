const inputs = require("fs").readFileSync("/dev/stdin", "utf8").split('\n')

const N = Number(inputs[0])
const A = inputs[1].split(' ').map(Number)
A.unshift(0)

const DPeven = [...new Array(N+1)]
const DPodd = [...new Array(N+1)]
DPeven[0] = 0
DPodd[0] = -Number.MAX_SAFE_INTEGER

for (let i = 1; i <= N; i++) {
  DPeven[i] = Math.max(DPeven[i-1], DPodd[i-1] + 2*A[i])
  DPodd[i] = Math.max(DPeven[i-1] + A[i], DPodd[i-1])
}

console.log(Math.max(DPeven[N], DPodd[N]))