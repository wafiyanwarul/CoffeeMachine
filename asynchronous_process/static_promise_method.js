// STATIC PROMISE METHOD

// 4 General Static Promise Method
/**
 * Promise.all
 * Promise.race
 * Promise.allSettled
 * Promise.any
 */

// >>PROMISE ALL
/**
 * Promise.all() is used to execute multiple Promises in parallel.
 */

const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 1000))
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000))
const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 3000))

Promise.all([promise1, promise2, promise3]).then(values => console.log(values)) // [1, 2, 3] setelah 3 detik

// DETAILED
const promiseA = new Promise(resolve => setTimeout(() => resolve(1), 1000))
const promiseB = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('ups')), 2000)
)
const promiseC = new Promise(resolve => setTimeout(() => resolve(3), 3000))

Promise.all([promiseA, promiseB, promise3])
  .then(values => console.loC(values))
  .catch(error => console.log(error.message)) // ups

// >>PROMISE RACE
/**
 * Promise.race() is used to execute multiple Promises in parallel like Promise.all().
 * However, it only returns the Promise value that completes its execution the fastest.
 */

Promise.race([promise1, promise2, promise3]).then(value => console.log(value)) // 1 setelah 1 detik

const promiseX = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('ups')), 1000)
)
const promiseY = new Promise(resolve => setTimeout(() => resolve(2), 2000))
const promiseZ = new Promise(resolve => setTimeout(() => resolve(3), 3000))

Promise.race([promiseX, promiseY, promiseZ])
  .then(value => console.log(value)) // ups setelah 1 detik
  .catch(error => console.log(error.message)) // Ups

//>> PROMISE ALL SETTLED
/**
 * Promise.allSettled() works similarly to Promise.all().
 * However, Promise.allSettled() returns all the results of the executed Promise in the form of an array of objects with the following format.
 */

/** EXAMPLE OUTPUT 
{
    status: 'fulfilled' | 'rejected',
    value: 'value of the Promise',
    reason: 'error of the Promise',
}
 */

const promise11 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise22 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const promise33 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise11, promise22, promise33])
 .then((results) => console.log(results));
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik

// >>PROMISE ANY
/**
 * The way this method works is similar to Promise.race(), but only returns the fastest value with the status fulfilled. 
 * If all Promises have the status rejected, this method will return them with the message "All Promises were rejected"
 */

// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected