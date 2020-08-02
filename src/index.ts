type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

let a: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true
}

console.log(a)