// 1) SET TIMEOUT FUNCTION

// EXAMPLE (uncomment to try)
/*
console.log('Selamat datang!')

setTimeout(() => {
  console.log('Terima kasih sudah mampir, silakan datang kembali!')
}, 3000)

console.log('Ada yang bisa dibantu?')
*/

// 2) ASYNCHRONOUS HANDLING WITH CALLBACK

// CALLBACK STYLE
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

function usersCallback (error, users) {
  if (error) {
    console.log('process failed:', error.message)
    return
  }
  console.log('process success:', users)
}

getUsers(false, usersCallback) // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback) // process failed: cannot retrieve users due offline

/**
 * CALLBACK FUNCTION STANDARD STRUCTURE
 * function callback(error, data) {
      logika ketika proses asynchronous selesai
   }
 * Argumen pertama dari fungsi callback merupakan error.
 * Argumen ini hanya akan bernilai jika proses asynchronous gagal, sebaliknya biasanya bernilai null. 
 */

// CALLBACK HELL
