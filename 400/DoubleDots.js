const main = (input) => {
  const args = input.split('\n')
  const nm = args[0].split(' ').map(v => Number(v))
  const n = nm[0]
  const m = nm[1]
  const lines = args.slice(1, args.length).map(line => line.split(' ').map(v => Number(v)))
  const room = Array(n + 1).fill(0).map(() => [])
  for (let i = 0; i < m; i++) {
    const [a, b] = lines[i]
    room[a].push(b)
    room[b].push(a)
  }
  let prev = Array(n).fill(-1)
  prev[0] = 0
  const queue = []
  queue.push(1)
  while (queue.length > 0) {
    const p = queue.shift()
    room[p].forEach(n => {
      if (prev[n - 1] !== -1) {
        return
      }
      prev[n - 1] = p
      queue.push(n)
    })
  }
  console.log('Yes')
  for (let i = 1; i < n; i++) {
    console.log(prev[i])
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))