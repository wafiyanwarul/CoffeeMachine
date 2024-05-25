// EXAMPLE CALLBACK FUNCTION FROM PREVIOUS TOPIC
/*
function getUsers (isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail']

    if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null)
      return
    }

    callback(null, users)
  }, 3000)
}
*/

/**
 * If we change the approach to using Promises, we no longer need the callback argument.
 * Instead, the `getUser` function should return a Promise object in this way.
 */

// trying refactor code from callback to promise manually
function getUsers (isOffline) {
  //return a Promise object
  return new Promise((resolve, reject) => {
    //simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail']

      if (isOffline) {
        reject(new Error('cannot retrieve users due offline'))
        return
      }

      resolve(users)
    }, 3000)
  })
}

getUsers(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message))