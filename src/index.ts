let a: {
  b: number
  c?: string
  [key: number]: boolean
}

a = {b: 1, 10: true}

console.log(a)