// CUSTOM ERROR

/**
 * we can make our own error case to help us in displaying detail of error message
 */

// example : error class to check data validation from JSON
class ValidationError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ValidationError'
  }
}

const json = '{ "age": 30 }'

try {
  const user = JSON.parse(json)

  if (!user.name) {
    throw new ValidationError("'name' is required.")
  }

  if (!user.age) {
    throw new ValidationError("'age' is required.")
  }

  console.log(user.name)
  console.log(user.age)
} catch (error) {
  if (error instanceof SyntaxError) { // by using instanceOf will give us more detail information about an error 
    console.log(`JSON Syntax Error: ${error.message}`)
  } else if (error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`)
  } else if (error instanceof ReferenceError) {
    console.log(error.message)
  } else {
    console.log(error.stack)
  }
}

/* output
Invalid data: 'name' is required.
*/
