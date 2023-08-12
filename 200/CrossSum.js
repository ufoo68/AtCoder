const main = (input) => {
  const [hw, ...other] = input.split("\n");
  const [h, w] = hw.split(" ").map(Number);
  const a = other.map((a) => a.split(" ").map(Number));
  let ans = [...Array(h)].map(() => [...Array(w)].fill(0));
  let hsum = [...Array(w)].map(() => 0);
  let wsum = [...Array(h)].map(() => 0);
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      wsum[i] += a[i][j];
      hsum[j] += a[i][j];
    }
  }
  console.log(
    ans
      .map((row, i) => row.map((_, j) => wsum[i] + hsum[j] - a[i][j]).join(" "))
      .join("\n")
  );
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
