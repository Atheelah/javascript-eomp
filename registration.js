function registration() {
  let inputs = document.querySelectorAll(".input");
  let first_name = inputs[0].value;
  let last_name = inputs[1].value;
  let username = inputs[2].value;
  let password = inputs[3].value;
  let email = inputs[4].value;
  console.log(first_name);
  console.log(last_name);
  console.log(username);
  console.log(password);
  console.log(email);
  fetch("https://desolate-forest-25770.herokuapp.com/user-registration/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        console.log(data);
        myStorage = window.localStorage;
        myStorage.setItem("jwt-token", data["access_token"]);
        myStorage.setItem("first name", first_name);
        myStorage.setItem("last name", last_name);
        myStorage.setItem("username", username);
        myStorage.setItem("password", password);
        myStorage.setItem("email", email);
        window.location.href = "./sign in.html";
      }
    });
}
