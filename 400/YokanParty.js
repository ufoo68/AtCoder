const main = (input) => {
  const lines = input.split('\n');
  const [n, l] = lines[0].split(' ').map(Number);
  const k = Number(lines[1]);
  const a = lines[2].split(' ').map(Number);
  let left = 0;
  let right = l;
  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    let pre = 0;
    for (let i = 0; i < n; i++) {
      if (a[i] - pre >= mid && l - a[i] >= mid) {
        count++;
        pre = a[i];
      }
    }
    if (count >= k) {
      left = mid;
    } else {
      right = mid;
    }
  }
  console.log(left);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
