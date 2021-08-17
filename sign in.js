function signin() {
  let inputs = document.querySelectorAll(".input");
  let username = inputs[0].value;
  let password = inputs[1].value;
  console.log(username);
  console.log(password);
  fetch("https://desolate-forest-25770.herokuapp.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        console.log(data);
        myStorage = window.localStorage;
        myStorage.setItem("jwt-token", data["access_token"]);
        myStorage.setItem("username", username);
        myStorage.setItem("password", password);
        window.location.href = "./welcome.html";
      }
    });
}

// function login() {
//   let username = document.querySelector(".username").value;
//   let password = document.querySelector(".password").value;

//   fetch("https://desolate-forest-25770.herokuapp.com/auth", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: username,
//       password: password,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       if (data["access_token"]) {
//         console.log(data);
//         localStorage.setItem("jwt_token", data["access_token"]);
//         window.location.href = "./products.html";
//       }
//     });
// }

// document.querySelector(".proceed-btn").addEventListener("submit", (e) => {
//   e.preventDefault();
//   login();
// });
