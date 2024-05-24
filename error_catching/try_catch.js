// TRY AND CATCH

/*
try {
  // kode
} catch (error) {
  // error handling
} 
*/

try {
  console.log('Awal blok try') // (1)
  errorCode // (2)
  console.log('Akhir blok try') // (3)
} catch (error) {
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}

/**
 * Object error memiliki beberapa properti utama di dalamnya, yaitu:
 * - name : Nama error yang terjadi.
 * - message : Pesan tentang detail error.
 * - stack : Informasi urutan kejadian yang menyebabkan error.
 */

// try_catch_finally

try {
  console.log('Awal blok try')
  console.log('Akhir blok try')
} catch (error) {
  console.log('Baris ini diabaikan')
} finally {
  console.log('Akan tetap dieksekusi') // finally akan tetap dieksekusi baik terjadi error maupun tidak pada blok try
}
