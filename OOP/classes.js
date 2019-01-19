class User {
  // the same thing as the function constructor
  constructor(name, score) {
    this.name = name
    this.score = score
  }

  increase() {
    this.score++
  }
}

// Creates function PaidUser as a function constructor
// extends sets the PaidUser.prototype = Object.create(User.prototype)
// extends also sets PaidUser.__proto__ to User
// when super is called, it calls User function and then the return object is now what `this` referes to
// as if it is calling User function with `new`, but it sets the new object's __proto__
// to PaidUser.prototype
// actually, it is done by construct(PaidUser.__proto__, [name, score], PaidUser)
class PaidUser extends User {
  constructor(name, score, balance) {
    super(name, score, balance)
    this.balance = balance
  }

  increaseBalance() {
    this.balance++
  }
}

const user = new User('Will', 500)

user.increase()
console.log(user)

const paidUser = new PaidUser('Jeff', 300, 500)
paidUser.increase()
paidUser.increaseBalance()

console.log(paidUser)

console.log(PaidUser.__proto__)
