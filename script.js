function submit() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  document.getElementById("showEmail").innerHTML = email;
  document.getElementById("showPassword").innerHTML = password;
}

function reset() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("showEmail").innerHTML = "";
  document.getElementById("showPassword").innerHTML = "";
}
