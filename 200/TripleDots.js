const main = (input) => {
  const args = input.split('\n')
  const k = Number(args[0])
  const s = args[1]
  if(s.length <= k) {
    console.log(s)
  } else {
    console.log(`${s.slice(0, k)}...`)
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))