console.log('Generators: BEGIN')

let it = false

function *increase(start, end, step) {
  console.log('start', start)
  console.log('end', end)
  console.log('step', step)
  while(true) {
    if (start > end) break
    yield start
    start += step
  }
  return 'end increase'
}

for (let count of increase(0, 5, 1))
  console.log('for loop counting', count)

let numbers = [...increase(0, 10, 2)]
console.log('store values into variable', numbers)

it = increase(0, 5, 1)
console.log('call each', it.next())
console.log('call each', it.next())
console.log('call each', it.next())
console.log('call each', it.next())
console.log('call each', it.next())
console.log('call each', it.next())
console.log('call each', it.next())
console.log('call each', it.next())

function *calculator(net) {
  console.log('net', net)
  let vat = (yield net) * 10 / 100
  let insurance = (yield vat) * 20 / 100
  yield insurance
}

it = calculator(10)

let salary = it.next()
console.log('salary', salary)

let vat = it.next(salary.value)
console.log('vat', vat)

let insurance = it.next(salary.value)
console.log('insurance', insurance)

function *quiz(bound) {
  console.log('bound', bound)
  let check = 0
  while(true) {
    check = yield check
    console.log('check', check)
    if (check > bound) break
  }
  console.log(`${check} is greater than ${bound}`)
  return 'end quiz'
}

it = quiz(Math.floor(Math.random() * 10))
while (true) {
  let rt = it.next(Math.floor(Math.random() * 11))
  if (rt.value === 'end quiz') break
  console.log('yield', rt)
}


console.log('Generators: END')
