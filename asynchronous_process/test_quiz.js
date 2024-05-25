// CHANGE ASYNCHRONOUS FUNCTION CALLBACK BASED TO PROMISE BASED

/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

import { promisify } from 'util'

function getProvinces (countryId, callback) {
  // simulate network delay
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' }
      ])
      return
    }

    callback(new Error('Country not found'), null)
  }, 1000)
}

// create a Promise version of getProvinces
const getProvincesPromise = promisify(getProvinces)

getProvincesPromise('id')
  .then(Provinces => console.log(Provinces))
  .catch(err => console.log(err.message))

// export both functions
export { getProvinces, getProvincesPromise };

// module.exports =  { getProvinces: getProvincesPromise }