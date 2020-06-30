

const button = document.querySelector('.call')

button.addEventListener('click', () => {
  // get function reference 
  const sayHello = firebase.functions().httpsCallable('sayHello')
  sayHello().then((results) => {
    console.log('button pressed')
    console.log(results.data)
  })
})

