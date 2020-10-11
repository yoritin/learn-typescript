type Human = {
  readonly name: string;
  age: number;
  greeting(message: string): void;
}
class Developer implements Human {
  constructor(public name: string, public age: number) {}
  greeting(message: string) {
    console.log('Hello!')
  }
}
const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  }
}
const user: Human = tmpDeveloper;