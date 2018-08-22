console.log('Arrow Functions: BEGIN')

let JSgreetings = function(name) {
  console.log('Hello ' + name)
}
JSgreetings('pure JS')

let ES6greetings = (name = '') => {
  console.log(`Hello ${name}`)
}
ES6greetings('ES6')

let isZeroNine = (input1, input2, input3 = 1) => {
  console.log(`input1 value: ${input1 || 'no value'}`)
  console.log(`input2 value: ${input2 || 'no value'}`)
  console.log(`input3 value: ${input3 || 'no value'}`)
}
isZeroNine(0)

let JSpointer = function() {
  console.log('js pointer', this)
}
JSpointer()

let ES6pointer = () => {
  console.log('es6 pointer', this)
}
ES6pointer()

let JSlogUpperCase = function() {
  let _this = this

  this.string = this.string.toUpperCase()
  return function () {
    return console.log(_this.string)
  }
}
JSlogUpperCase.call({ string: 'js rocks' })()

let ES6logUpperCase = function() {
  this.string = this.string.toUpperCase()
  return () => {
    console.log(this.string)
  }
}
ES6logUpperCase.call({ string: 'es6 rocks' })()

console.log('Arrow Functions: END')
