var inputUser = document.getElementById("email");
var inputPassword = document.getElementById("password");
var progressBarUser = inputUser.nextElementSibling.querySelector(".progress");
var progressBarPassword = inputPassword.nextElementSibling.querySelector(".progress");

inputUser.addEventListener("click", function() {
  progressBarUser.style.width = "0";
  progressBarUser.style.animation = "progressAnimation 3s forwards";
});

inputPassword.addEventListener("click", function() {
  progressBarPassword.style.width = "0";
  progressBarPassword.style.animation = "progressAnimation 3s forwards";
});

function redirectToLoginPage() {
  var userEmail = document.getElementById('email').value.trim();
  var userPass = document.getElementById('password').value.trim();

  if (userEmail === "" || userPass === "") {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  if (userPass.length < 8) {
    alert("A senha deve ter pelo menos 8 caracteres.");
    return;
  }

  window.location.href = "/Game/game.html";
}