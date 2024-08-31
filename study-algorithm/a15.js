const { lowerBound } = require('./util');

const a=[46,80,11,77,46]
const n=5
const b=Array(n).fill(0)
const sorted=[...new Set(a)].sort((a,b)=>a-b)
for (let i=0;i<n;i++){
  b[i]=lowerBound(sorted, a[i])+1
}
console.log(b)