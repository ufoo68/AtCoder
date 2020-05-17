const main = (input) => {
  const n = Number(input)
  const nOne = n % 10
  if (nOne === 2 || nOne === 4 || nOne === 5 || nOne === 7 || nOne === 9) {
    console.log('hon')
  } else if (nOne === 0 || nOne === 1 || nOne === 6 || nOne === 8) {
    console.log('pon')
  } else {
    console.log('bon')
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))