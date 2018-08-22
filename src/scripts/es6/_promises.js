console.log('Promises: BEGIN')

function JSmsg(from, msg, timeout, callback) {
  setTimeout(function() {
    console.log("A JS message sent from " + from + ": " + msg)
    callback(msg)
  }, timeout)
}

JSmsg("foo", "hello", 400, function(msg) {
  JSmsg("bar", msg, 100, function() {
    console.log(msg)
  })
})

let ES6msg = (from, msg, timeout) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`An ES6 message sent from ${from}: ${msg}`)
      resolve(msg)
    }, timeout)
  })
}

ES6msg('foo', 'bye', 400).then(msg => {
  return ES6msg('bar', msg, 100)
}).then(msg => {
  console.log(msg)
})

new Promise(resolve => {
  setTimeout(() => {
    console.log('start promise')
    resolve('first call')
  }, 200)
}).then(msg => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('msg', msg)
      resolve('second call')
    }, 100)
  })
}).then(msg => {
  setTimeout(() => {
    console.log('msg', msg)
    return 'third call'
  }, 200)
}).then(msg => {
  console.log('msg', msg)
  console.log('end promise')
})

console.log('Promises: END')
