const functions = require('firebase-functions');
const firebase = require('firebase')


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  // let name = request.query.name
  let age = request.query.age
  let boolean = request.query.boolean

  let name = request.body.name
  // age = request.body.age
  // boolean = request.body.boolean
  response.status(200).send(`your name is ${name}, you are ${age} years old. boolen is ${boolean}`);
});

exports.sayHello = functions.https.onCall((data, context) => {
  return `hello this is working `
})
