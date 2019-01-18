//async await implementation
function* generatorFunction() {
  const data = yield fetch('https://jsonplaceholder.typicode.com/users')
  const users = yield data.json()
  yield users
}

const requestGenerator = generatorFunction()

const requestPromise = requestGenerator.next().value

requestPromise
  .then(data => requestGenerator.next(data).value)
  .then(json => requestGenerator.next(json).value)
  .then(users => console.log(users))

