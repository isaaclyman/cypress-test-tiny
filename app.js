var getPromise = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 100)
})

setTimeout(() => {
  getPromise().then(() => setTimeout(() => {
    document.getElementById('main').innerHTML = 'Loaded!'
  }, 100))
}, 100)
