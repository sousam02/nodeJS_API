// Modules: are groups of code

// there are three types
// -> Every JavaScript File is a module
// Natives: Http, Dns, etc
// npm: Node Package Manager

// We can import modules using the function require()

// Modules that we create:
const {printName, lastName} = require('./printName');
printName(`Mateus ${lastName}`)

// Native Modules from Node
const os = require('os')
console.log(os.arch())
