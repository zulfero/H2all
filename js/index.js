const regBtn = document.querySelector(".btn");
const logBtn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".box-login input");
const message = document.getElementById("notification");
console.log(message);
console.log(inputs);

logBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let messages = [];
  regBtn.classList.add("active");
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
    // window.location.href=('http://127.0.0.1:5501/home.html')
  });

  // if (message.textContent === "") {
  //   if (localStorage.getItem("users") === null) {
  //     //create user

  //     users.push(user);
  //     localStorage.setItem("users", JSON.stringify(users));
  //   } else {
  //     users = JSON.parse(localStorage.getItem("users"));
  //     users.push(user);
  //     localStorage.setItem("users", JSON.stringify(users));
  //   }
  // }
};