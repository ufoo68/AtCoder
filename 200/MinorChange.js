const main = (input) => {
  const args = input.split('\n')
  const s = args[0].split('')
  const t = args[1].split('')
  console.log(s.filter((v,i) => v !== t[i]).length)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
