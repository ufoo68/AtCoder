const main = (input) => {
  const n = Number(input)
  if(n % 1000 === 0) {
    console.log(0)
  } else {
    console.log(1000 - (n % 1000))
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))