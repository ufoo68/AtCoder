const main = (input) => {
  const args = input.split('\n')
  const nx = args[0].split(' ').map(v => Number(v))
  const a = args[1].split(' ').map(v => Number(v)).map((v, i) => (i % 2 === 0) ? v : v - 1).reduce((x, y) => x + y)
  console.log((nx[1] < a) ? 'No' : 'Yes')
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))