const main = (input) => {
  const pi =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
  const n = Number(input);
  console.log(pi.slice(0, n + 2));
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
