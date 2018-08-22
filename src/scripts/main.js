// arrow functions
require('./es6/_arrows')

// classes
require('./es6/_classes')

// parameters handling
require('./es6/_params_handling')

// matching
require('./es6/_matching')

// built-in functions
require('./es6/_built-ins')

// modules
/* eslint-disable */
import pi, {e} from './es6/_modules'
import * as modules from './es6/_modules'

console.log('import variable', pi)
console.log('import variable', e)
console.log('import module', modules)

// generators
require('./es6/_generators')

// promises
require('./es6/_promises')
