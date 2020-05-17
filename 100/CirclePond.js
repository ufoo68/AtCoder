const main = (input) => {
  r = Number(input)
  console.log(2 * r * 3.14)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))