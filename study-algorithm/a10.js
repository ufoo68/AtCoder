const n=7
const a=[1,2,5,5,2,3,1]
const d=2
const lr=[[3,5],[4,6]]
const p=Array(n).fill(0)
const q=Array(n).fill(0)
for(let i=0;i<n;i++){
  if (i === 0) {
    p[i]=a[i]
  } else {
    p[i]=Math.max(p[i-1],a[i])
  }
}
for(let i=n-1;i>=0;i--){
  if (i === n-1) {
    q[i] = a[i]
  } else {
    q[i]=Math.max(q[i+1],a[i])
  }
}
for(let i=0;i<d;i++){
  const l=lr[i][0]-1
  const r=lr[i][1]+1
  if (l === 0) {
    console.log(q[r-1])
  }
  else if (r === n) {
    console.log(p[l-1])
  }
  else {
    console.log(Math.max(p[l-1],q[r-1]))
  }
}