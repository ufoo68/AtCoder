const main = (input) => {
  const args = input.split('\n')
  const nm = args[0].split(' ')
  const n = Number(nm[0])
  const m = Number(nm[1])
  const works = args[1].split(' ').map(v => Number(v))
  const sum = works.reduce((prev, curr) => prev + curr)
  if (n < sum) {
    console.log(-1)
  } else {
    console.log(n - sum)
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))