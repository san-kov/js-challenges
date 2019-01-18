function createUser(name, score) {
  let user = Object.create(userFunctions)
  user.name = name
  user.score = score
  return user
}

const userFunctions = {
  increase() {
    this.score++
  }
}

let user = createUser('Jeff', 50)

function createPaidUser(name, user, balance) {
  let newPaidUser = createUser(name, user)
  Object.setPrototypeOf(newPaidUser, paidUserFunctions)
  newPaidUser.balance = balance
  return newPaidUser
}

const paidUserFunctions = {
  getBalance() {
    return this.balance
  }
}

Object.setPrototypeOf(paidUserFunctions, userFunctions)

const paidUser = createPaidUser('James', 500, 500)
