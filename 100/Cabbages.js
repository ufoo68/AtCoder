const main = (input) => {
  const args = input.split(' ').map(v => Number(v))
  if (args[0] > args[1]) {
    console.log(args[1] * args[2] + (args[0] - args[1]) * args[3])
  } else {
    console.log(args[0] * args[2])
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))