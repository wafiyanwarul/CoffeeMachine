import { getUser, getWeather } from './utils.js'

function getUserWeather (userId) {
  let user

  return new Promise((resolve, reject) => {
    getUser(userId, (err, _user) => {
      if (err) {
        reject(err)
      } else {
        user = _user
        getWeather(user.location, (err, weather) => {
          if (err) {
            reject(err)
          } else {
            resolve({ ...user, ...weather })
          }
        })
      }
    })
  })
}

getUserWeather(1).then(console.log).catch(console.log)


//read data.txt
import { readFile } from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(readFile);

readFilePromise('./asynchronous_process/data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));

// test getProvinces in test_quiz.js
import { getProvincesPromise } from './test_quiz.js';

// Test with a valid countryId
getProvincesPromise('id')
  .then(provinces => console.log(provinces))
  .catch(err => console.error(err.message));

// Test with an invalid countryId
getProvincesPromise('us')
  .then(provinces => console.log(provinces))
  .catch(err => console.error(err.message));