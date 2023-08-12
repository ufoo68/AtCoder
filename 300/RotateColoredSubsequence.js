const main = (input) => {
  const [n, m] = input[0].split(" ").map(Number);
  let s = input[1].split("");
  const c = input[2].split(" ").map(Number);
  const p = [...Array(m)].map(() => []);
  let t = [...Array(n)];
  c.forEach((v, i) => {
    p[v - 1].push(i);
  });
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < p[i].length; j++) {
      t[p[i][(j + 1) % p[i].length]] = s[p[i][j]];
    }
  }
  console.log(t.join(""));
};
main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
