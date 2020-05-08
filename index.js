// Add your code here
// let formData = {
//   dogName: "Byron",
//   DogBreed: "Poodle",
// };

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };
// let Url = "http://localhost:3000/dogs"
// fetch(Url, configObj)

function submitData(name, email) {
  var user = {
    name: name,
    email: email,
  };
  var url = "http://localhost:3000/users";
  var configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  };
  return fetch(url, configObj)
    .then((response) => response.json())
    .then((json) => {
      document.body.innerHTML = json.id
    }).catch(error => {
      document.body.innerHTML= error.message
    })
}
