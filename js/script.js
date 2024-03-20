const formBox = document.querySelector(".form_box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".login-register");

console.log(formBox);

registerLink.addEventListener("click", function (e) {
  formBox.classList.add("active");
});

loginLink.addEventListener("click", function (e) {
  formBox.classList.remove("active");
});
