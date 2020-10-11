function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key]
  return value
}
console.log(copy({ name: 'yori', age: 38 }, 'age'))

class LightDatabase {
}
const stringLightDatabase = new LightDatabase