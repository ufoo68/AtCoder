const main = (input) => {
  const n = Number(input[0]);
  const x = Number(input[n * 2 + 1]);
  let wins = [];
  let minBet = 37;
  for (let i = 0; i < n; i++) {
    const ci = Number(input[2 * i + 1]);
    const ai = input[2 * i + 2].split(" ").map(Number);
    if (ai.includes(x)) {
      if (ci < minBet) {
        wins = [i + 1];
        minBet = ci;
      } else if (ci === minBet) {
        wins.push(i + 1);
      }
    }
  }
  console.log(wins.length);
  if (wins.length > 0) {
    console.log(wins.join(" "));
  }
};
main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
