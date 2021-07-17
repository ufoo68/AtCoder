const main = (input) => {
  const args = input.split('\n')
  const s = args[1].split('')
  s.some((v, i) => {
    if(v === '1' && (i % 2 === 0)) {
      console.log('Takahashi')
      return true
    } else if (v === '1' && (i % 2 !== 0)) {
      console.log('Aoki')
      return true
    }
  })
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))