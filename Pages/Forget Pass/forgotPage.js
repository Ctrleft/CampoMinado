var inputUser = document.getElementById("user");
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
