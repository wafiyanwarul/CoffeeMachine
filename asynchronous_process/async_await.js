// ASYNC AWAIT SYNTAX

//example
import { withDrawMoney, buyCinemaTicket, goInsideCinema } from './util_async.js'

async function watchMovie (amount) {
  try {
    const money = await withDrawMoney(amount)
    const ticket = await buyCinemaTicket(money)
    const result = await goInsideCinema(ticket)

    return result
  } catch (error) {
    throw error
  }
}

watchMovie(10)
  .then(result => console.log(result)) // enjoy the movie
  .catch(error => console.log(error.message))

watchMovie(5)
  .then(result => console.log(result))
  .catch(error => console.log(error.message)) // not enough money to buy ticket

  //KEUNTUNGAN ASYNC AWAIT SYNTAX
/**
 * 1>>> Lebih mudah dipahami dan ditulis.
 * Sintaks async dan await memungkinkan kita untuk menulis kode yang menangani asynchronous dengan cara yang sama seperti synchronous. Tentu ini membuat kode lebih mudah dipahami dan ditulis.
 * 2>>> Terhindar dari callback.
 * Penggunaan Promise secara langsung pun tidak terlepas dari callback, seperti .then() dan .catch(). Namun, dengan async dan await, kita bisa terlepas dari pola callback.
 * 3>>> Lebih mudah dalam mengelola error.
 * Async dan await benar-benar membuat pengalaman asynchronous layaknya synchronous, hingga dalam penanganan error-nya pun menggunakan beberapa hal yang sudah ada, seperti try, catch, dan throw.
 */