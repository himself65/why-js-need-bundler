// .cjs == .js
console.log('hello, world!')

require('module-a')
// <-- trying to find "main" in node_modules/module-a/package.json
// <-- or trying to find node_modules/module-a/index.js
