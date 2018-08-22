console.log('Build-ins: BEGIN')

let concatObj = { key: 'value' }
let JSobj = {}
Object.keys(concatObj).forEach(key => {
  JSobj[key] = concatObj[key]
})
console.log(JSobj)
let JSobjEntries = []
for (let prop in JSobj) {
  JSobjEntries.push([prop, JSobj[prop]])
}
console.log(JSobjEntries)
let JSobjValues = []
for (let prop in JSobj) {
  JSobjValues.push(JSobj[prop])
}
console.log(JSobjValues)

let ES6obj = {}
Object.assign(ES6obj, concatObj)
console.log(ES6obj)
console.log(Object.entries(ES6obj))
console.log(Object.values(ES6obj))

let JSfill = [0, 0, 0].map(function(current, index) {
  if (index < 1) return current
  return 7
})
console.log('JS array fill', JSfill)

let ES6fill = [0, 0, 0].fill(7, 1)
console.log('ES6 array fill', ES6fill)

let JSfind = [1, 2, 3, 4].filter(function(x) {
  return x > 2
})[0]
console.log('JS array find', JSfind)

let ES6find = [1, 2, 3, 4].find(x => x > 2)
console.log('ES6 array find', ES6find)

let JSfindIndex = [1, 2, 3, 4].filter(function(value, index) {
  return (value > 2)? index : null
})[0]
console.log('JS array findIndex', JSfindIndex)

let ES6findIndex = [1, 2, 3, 4].findIndex(x => x > 2)
console.log('ES6 array findIndex', ES6findIndex)

let JSrepeat = Array(1+2).join("abc")
console.log('JS array repeat', JSrepeat)

let ES6repeat = 'abc'.repeat(2.6)
console.log('ES6 array repeat', ES6repeat)

let JSincludes = 'abcde'.indexOf('cd') !== -1
console.log('JS includes', JSincludes)

let ES6includes = 'abcde'.includes('cd')
console.log('ES6 includes', ES6includes)

console.log('Build-ins: END')
