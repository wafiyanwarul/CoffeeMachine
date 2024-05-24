// THROWING ERROR

// good example of JSON parse
const json = '{ "name": "Yoda", "age": 20 }'

try {
  const user = JSON.parse(json)

  console.log(user.name)
  console.log(user.age)
} catch (error) {
  console.log(error.name)
  console.log(error.message)
}

// example without throwing error
/*
const json1 = '{ "age": 20 }' // without name parameter will caused our program little bit problematic

try {
  const user = JSON.parse(json1)

  console.log(user.name) // undefined
  console.log(user.age) // 20
} catch (error) {
  console.log(error.name)
  console.log(error.message)
} 
*/

// we can modify by using throw like this
const json2 = '{ "age": 20 }'

try {
  const user = JSON.parse(json2)

  if (!user.name) {
    throw new SyntaxError("'name' is required.")
  }

  console.log(user.name) // undefined
  console.log(user.age) // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`)
}

/* output
JSON Error: 'name' is required.
*/

// displaying error message based on the error case
const json3 = '{ "name": "Yoda", "age": 20 }'

try {
  const user = JSON.parse(json3)

  if (!user.name) {
    throw new SyntaxError("'name' is required.")
  }

  errorCode

  console.log(user.name) // Yoda
  console.log(user.age) // 20
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`)
  } else if (error instanceof ReferenceError) {
    console.log(error.message)
  } else {
    console.log(error.stack)
  }
}

/* output
errorCode is not defined 
*/
