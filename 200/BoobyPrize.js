const main = (input) => {
  const args = input.split('\n')
  const n = Number(args[0])
  const listA = args[1].split(' ').map(Number)
  const sortedA = listA.sort((a, b) => b - a)
  console.log(args[1].split(' ').map(Number).indexOf(sortedA[1])+1)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))