const main = (input) => {
  const args = input.trim().split("\n")
  args.shift()

  arrA = []
  arrB = []
  args.forEach(v => {
    const [a, b] = v.split(" ").map(Number)
    arrA.push(a)
    arrB.push(b)
  })

  uniqA = [...new Set(arrA)].sort((a, b) => a - b)
  uniqB = [...new Set(arrB)].sort((a, b) => a - b)

  args.forEach(v => {
    const [a, b] = v.split(" ").map(Number)
    const newA = search(uniqA, a) + 1
    const newB = search(uniqB, b) + 1
    console.log(newA, newB)
  })
}

const search = (arr, num) => {
  let index = -1
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] === num) {
      index = mid
      return mid
    } else if (arr[mid] < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return index
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))