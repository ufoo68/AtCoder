const main = (input) => {
  const args = input.split(' ').map(v => Number(v))
  const a = args[0]
  const b = args[1]
  const h = args[2]
  const m = args[3]
  const radA = (30.0 * h + m * 0.5) * Math.PI / 180.0
  const radB = m * 6.0 * Math.PI / 180.0
  const ax = a * Math.cos(radA)
  const ay = a * Math.sin(radA)
  const bx = b * Math.cos(radB)
  const by = b * Math.sin(radB)
  console.log(Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2)))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))