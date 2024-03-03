// require('module-b') // <-- throw error
console.log('hello, world!')
// this is treated as a 'module'
import 'module-b' // this would not let module be imported later
