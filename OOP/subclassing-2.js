function User(name, score) {
  this.name = name
  this.score = score
}

User.prototype.increase = function() {
  this.score++
}

function PaidUser(name, score, balance) {
  User.call(this, name, score)
  this.balance = balance
}

PaidUser.prototype = Object.create(User.prototype)

PaidUser.prototype.increaseBalance = function() {
  this.balance++
}

let paidUser = new PaidUser('Alex', 80, 500)
paidUser.increase()
paidUser.increaseBalance()

console.log(paidUser)
