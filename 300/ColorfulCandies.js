const main = (input) => {
  const args = input.split('\n')
  const n = Number(args[0].split(' ')[0])
  const k = Number(args[0].split(' ')[1])
  const c = args[1].split(' ')
  const cnt = new Map();
  let ans = 0, left = 0;
  for (let right = 1; right <= n; right++) {
    cnt.set(c[right-1], (cnt.get(c[right-1]) || 0) + 1);
    ans = Math.max(ans, cnt.size);
    if (right - left === k) {
      cnt.set(c[left], cnt.get(c[left]) - 1);
      if (cnt.get(c[left]) === 0) cnt.delete(c[left]);
      left++;
    }
  }
  console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))