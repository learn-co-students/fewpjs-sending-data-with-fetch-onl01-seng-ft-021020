// Add your code here
function submitData(userName, userEmail) {
  let postObj = {
    name: userName,
    email: userEmail
  };

  let url = 'http://localhost:3000/users';
  let postConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(postObj)
  };

  return fetch(url, postConfig)
    .then( (response) => response.json())
    .then( (data) => {
      let newId = document.createElement('p')
      newId.textContent = data.id 
      document.querySelector('body').appendChild(newId)
    })
    .catch( (error) => {
      let newError = document.createElement('p')
      newError.textContent = error.message
      document.querySelector('body').appendChild(newError)
    })
}
