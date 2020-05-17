const main = (input) => {
  const args = input.split('\n')
  const nm = args[0].split(' ').map(v => Number(v))
  const n = nm[0]
  const m = nm[1]
  const lines = args.slice(1, n)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))