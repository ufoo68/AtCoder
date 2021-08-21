const main = (input) => {
  const args = input.trim().split('\n')
  const n = BigInt(args[0])
  if (n === 1) {
    console.log(0)
  } else if (n <= Number.MAX_SAFE_INTEGER) {
    console.log(Math.floor(Math.log2(Number(n))))
  } else {
    const factor = n / 2n ** 30n
    // log2 factor * 2^30 → 30 + log2 factor
    console.log(Math.floor(30 + Math.log2(Number(factor))))
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))