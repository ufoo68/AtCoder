const main = (input) => {
  const args = input.split('\n')
  const c = args[1].split(' ').map(v => Number(v))
  const mod = 1000000007n
  let ans = 1n
  c.sort((a, b) => a - b).forEach((v, i) => {
    if (v - i < 1) ans = 0n
    ans = (ans * BigInt(c[i] - i)) % mod
  })
  console.log(ans.toString())
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))