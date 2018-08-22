console.log('Matching: BEGIN')

let lst = [ 1, 2, 3 ]

let JSitemFirst = lst[0]
let JSitemLast = lst[lst.length - 1]
console.log('JS items', JSitemFirst, JSitemLast)

let [ES6itemFirst, , ES6itemLast] = lst
console.log('ES6 items', ES6itemFirst, ES6itemLast)

console.log('Matching: END')
