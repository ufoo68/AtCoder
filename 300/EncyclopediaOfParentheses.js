const main = (input) => {
  const n = Number(input);
  if (n % 2 === 1) {
    return;
  }
  for (let i = 0; i < 2 ** n; i++) {
    const bit = i.toString(2);
    const paddingBit = bit.padStart(n, "0");
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (paddingBit[j] === "0") {
        count += 1;
      } else {
        count -= 1;
      }
      if (count < 0) {
        break;
      }
    }
    if (count === 0) {
      console.log(paddingBit.replace(/0/g, "(").replace(/1/g, ")"));
    }
  }
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
