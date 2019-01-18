// implementing constructor functions
const userFunctions = {
  increase: function() {
    this.score++
  }
}

function createUser(name, score) {
  //set user's __proto__ property equal to userFunctions object
  let user = Object.create(userFunctions)
  user.name = name
  user.score = score
}

let newUser = createUser('Jim', 10)

// when searching, it will first look in newUser object itself, then, in __proto__ property
// which referes to userFunctions object
// on calling increase method, it will create an executional context, and create a local `this`
// which will be newUser object
// it then will look for it first in variable invironment, then in scope, and find it in global scope
newUser.increase()

// using new keyword

function User(name, score) {
  this.name = name
  this.score = score
}

User.prototype.increase = function() {
  this.score++
}

const user = new User(name, score)

// When creating a user with `new` keyword, the following happens:
// a new execution context is created
// `this` keyword is now equal to an empty object, which was created this way:
// Object.create(User.prototype)
// in the end, the new object is returned
user.increase()

// Arrow functions with `this`

User.prototype.add = function() {
  function foo() {
    this.name = ''
  }

  foo()
}

// There's a problem in this example
// in details, when we call a function on an object:
// user.add()
// the new execution context is created
// then, a local `this` is assigned to the user
// we declare a function foo
// and then, call it
// a new execution context is created
// now `this` referes to the global object
// arrow functions solve this problem:

User.prototype.add = function() {
  const foo = () => {
    this.name = ''
  }

  foo()
}

// Because when a new execution context is created,
// `this` keyword does not exist in it
// and it now looks in the lexical scope of the function
// which only depends on the location where it was defined
// and founds `this` keyword which is bound to the user object

// Each object has __proto__ property

let object = {}

// simple objects' __proto_ referes to the Object.prototype

object.__proto__ === Object.prototype

// functions have Function.prototype as __proto__ property

User.__proto__ === Function.prototype

// in the end, the __proto__ of Object.prototype.__proto__ is equal to null

Object.prototype.__proto__

function func() {}

// for exampe, when we call func.hasOwnProperty(), which is a function on Object.prototype object
// it will look first in func itself
// then, in func.__proto__, which is Function.protototype
// then, in Function.prototype.__proto__, which is Object.prototype

Function.prototype.__proto__ = Object.prototype


