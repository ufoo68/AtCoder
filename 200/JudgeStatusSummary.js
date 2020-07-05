const main = (input) => {
  const args = input.split('\n')
  const n = Number(args[0])
  let ac = 0
  let wa = 0
  let tle = 0
  let re = 0
  for (let i = 0; i < n; i++) {
    if (args[i + 1] === 'AC') {
      ac++
    }
    else if (args[i + 1] === 'WA') {
      wa++
    }
    else if (args[i + 1] === 'TLE') {
      tle++
    }
    else if (args[i + 1] === 'RE') {
      re++
    }
  }
  console.log(`AC x ${ac}`)
  console.log(`WA x ${wa}`)
  console.log(`TLE x ${tle}`)
  console.log(`RE x ${re}`)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))