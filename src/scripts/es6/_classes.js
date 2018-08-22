console.log('Classes: BEGIN')

function JSanimal(name) {
  this.name = name
}
JSanimal.prototype.getName = function() {
  return 'Name: ' + this.name
}
let JScat = new JSanimal('titty')
console.log('JS class', JScat.getName())


class ES6animal {
  constructor(name) {
    this.name = name
  }

  getName() {
    return `Name: ${this.name}`
  }

  speak() {
    return this
  }

  static eat() {
    return this
  }
}
let ES6cat = new ES6animal('kitty')
console.log('ES6 class', ES6cat.getName())
console.log('ES6 class function', ES6cat.speak())
console.log('ES6 class static function', ES6animal.eat())

console.log('Classes: END')
