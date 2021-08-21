const permutation = ({ result = [], pre = [], post, n = post.length }) => {
  if (n > 0) {
    post.forEach((_, i) => {
      const rest = [...post]
      const elem = rest.splice(i, 1)
      permutation({ result, pre: [...pre, ...elem], post: rest, n: n - 1 })
    })
  } else {
    result.push(pre)
  }
  return result
}

const main = (input) => {
  const args = input.trim().split(' ')
  const s = args[0]
  const k = Number(args[1])
  console.log(Array.from(new Set(permutation({ post: s.split('') }).map(s => s.join('')))).sort()[k - 1])
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))