const axios = require('axios')
const fetch = require('node-fetch');



const axiosCall = async () => {
  try {
    let request = await axios.post('http://dummy.restapiexample.com/api/v1/create', { "name": "test", "salary": "123", "age": "23" })
    console.log(request.data)
    // console.log(request.data)
  }

  catch (error) {
    console.error(error)
  }
}

const requestCall = async () => {

  let body = { "name": "kwaku", "salary": "123", "age": "23" }
  let res = await fetch('http://dummy.restapiexample.com/api/v1/create', {
    method: 'POST',
    body: JSON.stringify(body)
  })
  let answer = await res.json()
  console.log(answer);
}



// axiosCall()
requestCall()