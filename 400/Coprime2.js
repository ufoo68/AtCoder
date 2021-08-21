const input = require('fs').readFileSync('/dev/stdin', 'utf8')
const args = input.trim().split('\n')
const [N, M] = args[0].split(' ').map(Number)
const A = args[1].split(' ').map(Number)
const mem = Array(M + 1)

const fact = (n) => {
  let i = 2
  while (n > 1 && i * i <= n) {
    if (n % i === 0) {
      mem[i] = true
      n /= i
    } else {
      i++
    }
  }
  if (n > 1) {
    mem[n] = true
  }
}
for (let i = 0; i < N; i++) {
  fact(A[i])
}

const mem2 = Array(M)
for (let i = 2; i <= M; i++) {
  if (!mem2[i] && mem[i]) {
    for (let j = 1; i * j <= M; j++) {
      mem2[i * j] = true
    }
  }
}

const ans = []
for (let i = 1; i <= M; i++) {
  if (!mem2[i]) {
    ans.push(i)
  }
}
console.log(ans.length)
console.log(ans.join('\n'))
