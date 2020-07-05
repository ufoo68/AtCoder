const main = (input) => {
  const n = Number(input)
  console.log(n + n*n + n*n*n)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
