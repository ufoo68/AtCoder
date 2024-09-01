const inputs = require("fs").readFileSync("/dev/stdin", "utf8").split('\n')

const AB = inputs[0].split(' ').map(Number)
const A = AB[0]
const B = AB[1]

let count = 0

for(let i = -1 * (Math.max(A, B) + Math.abs(A - B)); i <= Math.max(A, B) + Math.abs(A - B); i++) {
  if (B - A === i - B) {
    count++
  } else if (i - A === B - i) {
    count++
  } else if (A - B === i - A) {
    count++
  } else if (i - B === A - i) {
    count++
  } else if (A - i === B - A) {
    count++
  } else if (B - i === A - B) {
    count++
  }
}
console.log(count)