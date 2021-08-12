function registration() {
  let inputs = document.querySelectorAll(".input");
  let first_name = inputs[0].value;
  let last_name = inputs[1].value;
  let username = inputs[2].value;
  let password = inputs[3].value;
  console.log(first_name);
  console.log(last_name);
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
