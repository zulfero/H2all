const regBtn = document.querySelector(".btn");
const logBtn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".box-login_Register input");
const message = document.getElementById("notification");
// const pop = document.querySelector(".pop_up");
// const btnBook = document.querySelectorAll(".hero-BTN");
// const butBook = document.querySelector(".close");
// console.log(message);
console.log(inputs);
// console.log(btnBook);

regBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let messages = [];
  logBtn.classList.add("active");
  validateInputs();
});

const validateInputs = () => {
  let user = {};
  let users = [];
  inputs.forEach(function (input) {
    if (input.value === "" || input.value == null) {
      input.style.border = "1px solid red";
      message.textContent = "Kindly fill all the fields";
    } else {
      if (input.name !== "terms") {
        message.textContent = "";
        input.style.border = "none";

        user[`${input.name}`] = input.value;
      }
    }
  });

  if (message.textContent === "") {
    if (localStorage.getItem("users") === null) {
      //create user

      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem("users"));
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }

};
