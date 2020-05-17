const main = (input) => {
  const args = input.split('\n')
  const n = Number(args[0])
  const boss = args[1].split(' ').map(v => Number(v))
  let subordinate = Array(n).fill(0)
  boss.forEach(element => {
    subordinate[element - 1] += 1
  })
  subordinate.forEach(element => {
    console.log(element)
  })
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))