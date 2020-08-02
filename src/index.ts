type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

let a: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true
}

a = {
  name: 'Domino',
  barks: true,
  wags:true
}

a = {
  name: 'Domino',
  barks: true,
  purrs: true,
  wags: true
}

console.log(a)