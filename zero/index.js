var emailEl = document.getElementById("email");
var passwordEl = document.getElementById("password");
var submit = document.getElementById("submit");
var form = document.getElementById("my-form");
var loginHeader = document.getElementById("login-header");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  var email = emailEl.value;
  var password = passwordEl.value;
  if (email == "" && password == "") alert("Fill the form before submitting");
  else if (email != "smu@smu.tn") alert("Wrong Email");
  else if (password != "123456") alert("Wrong Password");
  else if (email == "smu@smu.tn" && password == "123456") alert("Welcome");
});

var checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  if (checkbox.checked == true) form.style.display = "none";
  else form.style.display = "inherit";
});
