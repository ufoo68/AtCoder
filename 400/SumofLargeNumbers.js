const main = (input) => {
  const args = input.split(' ').map(Number)
  const [n, k] = args
  if (n + 1 - k === 0) {
    console.log(1)
    return
  }
  const sums = [0]
  for (let i = 0; i < n + 1; i++) {
    sums.push(i + sums[i])
  }
  const sum = Array(n + 2 - k).fill(0).map((_, i) => {
    const min = sums[i + k] - sums[0]
    const max = sums[n + 1] - sums[n + 1 - i - k]
    return max - min + 1
  }).reduce((p, c) => p + c)
  console.log(sum % (10 ** 9 + 7))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))