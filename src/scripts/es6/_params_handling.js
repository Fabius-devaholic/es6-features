console.log('Spread: BEGIN')

function JSrest (start) {
  var lst = Array.prototype.slice.call(arguments, 1);
  return `${start}, ${lst}`
}
console.log('JS rest', JSrest(1, 2, "hello", true, 7))

let ES6rest = (start, ...next) => {
  return `${start}, ${next}`
}
console.log('ES6 rest', ES6rest(1, 2, "hello", true, 7))

let arr = [1, 2, 3]
let JSlst = [].concat(arr)
console.log('JS list', JSlst)

let ES6lst = [...arr]
console.log('ES6 list', ES6lst)

console.log('Spread: END')
