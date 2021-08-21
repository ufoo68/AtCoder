const main = (input) => {
  const args = input.trim().split("\n")
  if (/^Hello,World!$/.test(args[0])) {
    console.log('AC')
  } else {
    console.log('WA')
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))